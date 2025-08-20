import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HistoryUser = () => {
  const [appointments, setAppointments] = useState([]); // ✅ Initialize as array

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/appoinmentByUser/showUser");
        console.log(res.data.user);
        setAppointments(res.data.user); // ✅ Use res.data
      } catch (err) {
        alert("API fault");
      }
    };

    fetchAppointments(); // ✅ Call the async function
  }, []); // ✅ Add empty dependency array to run once

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <h2 className="text-2xl font-bold mb-4">Your Appointment History</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((user) => (
          <div
            key={user._id}
            className="border p-4 mb-3 rounded shadow-md text"
          >
            <p><strong>Name:</strong> {user.userName}</p>
            <p><strong>Email:</strong> {user.userEmail}</p>
            <p><strong>Date:</strong> {user.date}</p>
            <p><strong>Slot:</strong> {user.slot}</p>
            <p><strong>Status:</strong> {user.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryUser;
