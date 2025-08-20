import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="shadow-md fixed w-full z-10 transition-colors duration-300"
        style={{ backgroundColor: menuOpen ? "#ffffff" : "#142241" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <h1
              className={`text-xl font-bold ${
                menuOpen ? "text-[#142241]" : "text-white"
              }`}
            >
              Clinic
            </h1>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className={`w-6 h-6 ${
                  menuOpen ? "text-[#C8966B]" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* menu open hone par */}
          {menuOpen && (
            <div className="bg-white rounded mt-4  justify-between p-4 space-y-2 items-end flex flex-col text-gray-800 font-medium">
              {/* right */}

              <Link to="/home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/appointment" onClick={() => setMenuOpen(false)}>
                Appointment
              </Link>
              <Link to="/history" onClick={() => setMenuOpen(false)}>
                Your History
              </Link>
              <Link
                to="/logout"
                onClick={() => setMenuOpen(false)}
                className="border bg-red-400 hover:bg-red-700 text-white py-1 font-bold px-3 rounded-lg"
              >
                LogOut
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
