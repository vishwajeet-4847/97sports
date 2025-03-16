import React, { useState } from "react";
import { useNavigate } from "react-router";

const SportsLoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-red-600 to-red-800 flex flex-col items-center justify-center pt-16">
      {/* Close button */}
      <div onClick={navigate(-1)} className="absolute top-2 right-2">
        <span className="text-black text-2xl font-bold">✕</span>
      </div>

      {/* Logo */}
      <div className="mb-16">
        <div className="flex">
          <div className="bg-blue-700 py-1 px-2">
            <span className="text-white text-2xl font-bold italic">97</span>
          </div>
          <div className="bg-red-500 py-1 px-2">
            <span className="text-white text-2xl font-bold italic">
              SPORTS.IN
            </span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md px-8 space-y-4">
        {/* Username Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 pl-4 pr-10 rounded-md border border-gray-300 bg-white"
          />
          <div className="absolute right-3 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pl-4 pr-10 rounded-md border border-gray-300 bg-white"
          />
          <div className="absolute right-3 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-red-700 text-white p-2 rounded-md font-medium shadow-md hover:bg-red-800 transition">
          Login
        </button>

        {/* Demo Login Button */}
        <button className="w-full bg-red-800 text-white p-2 rounded-md font-medium shadow-md hover:bg-red-900 transition">
          Login with Demo ID
        </button>
      </div>
    </div>
  );
};

export default SportsLoginScreen;
