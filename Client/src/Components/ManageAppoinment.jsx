import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import axios from "axios";

const ManageAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    date: "",
    slot: "",
    status: "Pending",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/appoinmentUser/appointments/bookedShow"
        );
        setAppointments(res.data.userRes);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching appointments");
        setLoading(false);
      }
    })();
  }, []);

  const sortAppointments = (list) => {
    return [...list].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  };

  const displayedAppointments = sortAppointments(
    appointments.filter((appt) => {
      const username = appt.userName ? appt.userName.toLowerCase() : "";
      const email = appt.userId ? appt.userId.toLowerCase() : "";
      const slot = appt.slot ? appt.slot.toLowerCase() : "";
      const date = appt.date || "";

      return (
        username.includes(searchTerm.toLowerCase()) ||
        email.includes(searchTerm.toLowerCase()) ||
        date.includes(searchTerm) ||
        slot.includes(searchTerm.toLowerCase())
      );
    })
  );

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const startEdit = (appt) => {
    setEditingId(appt._id);
    setEditForm({ date: appt.date, slot: appt.slot, status: appt.status });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ date: "", slot: "", status: "Pending" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async (id) => {
    const confirmUpdate = window.confirm(
      "Are you sure you want to update the appointment?"
    );
    if (!confirmUpdate) return;

    try {
      const response = await axios.put(
        `http://localhost:3000/appoinmentUser/appointments/updateUser/${id}`,
        {
          date: editForm.date,
          slot: editForm.slot,
          status: editForm.status,
        }
      );

      if (response.data.status === 1) {
        alert("Appointment updated successfully");

        setAppointments((prev) =>
          prev.map((appt) =>
            appt._id === id
              ? {
                  ...appt,
                  date: editForm.date,
                  slot: editForm.slot,
                  status: editForm.status,
                }
              : appt
          )
        );

        cancelEdit();
      } else {
        alert("Update failed from API");
      }
    } catch (err) {
      alert("Client error while updating appointment");
    }
  };

  const cancelAppointment = async (id) => {
    const confirmCancel = window.confirm(
      "Are You Sure You Want To Cancel The Appointment?"
    );
    if (!confirmCancel) return;

    try {
      const response = await axios.delete(
        `http://localhost:3000/appoinmentUser/appointments/delete/${id}`
      );
      if (response.data.status === 1) {
        alert("Appointment cancelled successfully ✅");
        setAppointments((prev) => prev.filter((appt) => appt._id !== id));
      } else {
        alert("Failed To Cancel the Appointment API: " + response.data.msg);
      }
    } catch (err) {
      alert("❌ Server error while cancelling appointment");
    }
  };

  const formatDate = (dateStr) => format(parseISO(dateStr), "PPP");

  if (loading)
    return (
      <div className="text-center p-8 text-gray-500 text-lg">Loading...</div>
    );

  if (error)
    return (
      <div className="text-center p-8 text-red-500 font-semibold">{error}</div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Appointment Management
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search appointments..."
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex space-x-4 mb-6">
        {["userName", "date", "slot", "status"].map((key) => (
          <button
            key={key}
            onClick={() => toggleSort(key)}
            className={`flex-1 text-sm font-semibold px-3 py-2 rounded-md border ${
              sortKey === key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {key === "userName"
              ? "Patient"
              : key.charAt(0).toUpperCase() + key.slice(1)}{" "}
            {sortKey === key && (sortDirection === "asc" ? "▲" : "▼")}
          </button>
        ))}
      </div>

      {displayedAppointments.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No appointments found.</div>
      ) : (
        <div className="space-y-4">
          {displayedAppointments.map((appt) => (
            <div
              key={appt._id}
              className="bg-white rounded-lg shadow p-4 border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 text-blue-700 rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                  {appt.userName.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">
                    {appt.userName}
                  </div>
                  <div className="text-sm text-gray-500">{appt.userId}</div>
                </div>
              </div>

              <div className="space-y-2 text-gray-700 text-sm">
                <div>
                  <span className="font-semibold">Date: </span>
                  {editingId === appt._id ? (
                    <input
                      type="date"
                      name="date"
                      value={editForm.date}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    formatDate(appt.date)
                  )}
                </div>
                <div>
                  <span className="font-semibold">Slot: </span>
                  {editingId === appt._id ? (
                    <select
                      name="slot"
                      value={editForm.slot}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    >
                      {[
                        "09:00 AM",
                        "10:00 AM",
                        "11:00 AM",
                        "12:00 PM",
                        "01:00 PM",
                        "02:00 PM",
                        "03:00 PM",
                        "04:00 PM",
                      ].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  ) : (
                    appt.slot
                  )}
                </div>
                <div>
                  <span className="font-semibold">Status: </span>
                  {editingId === appt._id ? (
                    <select
                      name="status"
                      value={editForm.status}
                      onChange={handleChange}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Completed">Completed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${
                        appt.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : appt.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : appt.status === "Completed"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {appt.status}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex space-x-3 flex-wrap">
                {editingId === appt._id ? (
                  <>
                    <button
                      onClick={() => saveEdit(appt._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEdit(appt)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => cancelAppointment(appt._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageAppointment;
