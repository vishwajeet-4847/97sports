import React, { useState } from "react";

const Fullgame = () => {
  const [activeTab, setActiveTab] = useState("Winner");
  const [activeSection, setActiveSection] = useState("Winner");

  const tabs = ["All", "Popular", "Winner", "Bookmakers"];

  const winnerData = [
    {
      team: "Mumbai Indians Women",
      back: 1.83,
      lay: 1.99,
      backAmount: 154.27,
      layAmount: 111.93,
    },
    {
      team: "Delhi Capitals Women",
      back: 1.97,
      lay: 2.3,
      backAmount: 179.15,
      layAmount: 214.6,
    },
    { team: "UP Warriorz Women", back: 0, lay: 0, backAmount: 0, layAmount: 0 },
    {
      team: "RC Bengaluru Women",
      back: 0,
      lay: 0,
      backAmount: 0,
      layAmount: 0,
    },
    {
      team: "Gujarat Giants Women",
      back: 0,
      lay: 0,
      backAmount: 0,
      layAmount: 0,
    },
  ];

  const bookmakerData = [
    {
      team: "Delhi Capitals Women",
      back: 95,
      lay: 0,
      backAmount: "489.7K",
      layAmount: "500K",
    },
    {
      team: "Mumbai Indians Women",
      back: 80,
      lay: 0,
      backAmount: "499.5K",
      layAmount: "500K",
    },
    {
      team: "RC Bengalore Women",
      back: 0,
      lay: 0,
      backAmount: "500K",
      layAmount: "500K",
      suspended: true,
    },
    {
      team: "Gujarat Giants Women",
      back: 140,
      lay: 0,
      backAmount: "488K",
      layAmount: "500K",
      suspended: true,
    },
    {
      team: "UP Warriorz Women",
      back: 0,
      lay: 0,
      backAmount: "500K",
      layAmount: "500K",
      suspended: true,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-100 overflow-hidden rounded shadow">
      {/* Header */}
      <div className="relative">
        <img
          src="https://97sports.in/CricketBanner.fa7d242575eddf8f.jpg"
          alt=""
          className=" h-36 w-full"
        />
      </div>

      {/* Tabs */}
      <div className="flex w-full bg-gray-200 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm flex-1 ${
              activeTab === tab
                ? "bg-green-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="bg-white">
        {/* Winner Section */}
        <div className={`${activeSection === "Winner" ? "block" : "hidden"}`}>
          <div className="flex justify-between items-center bg-white text-white ">
            <div className="flex w-fit items-center p-2 rounded-tr-xl bg-gray-800 ">
              <span className="font-bold">Winner</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
            </div>
            <div className="text-xs text-black mr-2 font-semibold">
              Matched € 9.6K
            </div>
          </div>

          <div className="border-b border-gray-300">
            <div className="flex font-bold text-sm">
              <div className="w-1/2 p-2"></div>
              <div className="w-1/4 p-2 text-center bg-[#72bbef] border-l border-gray-300">
                Back
              </div>
              <div className="w-1/4 p-2 text-center bg-[#faa9ba] border-l border-gray-300">
                Lay
              </div>
            </div>

            {winnerData.map((item, index) => (
              <div
                key={index}
                className="flex text-sm border-t border-gray-200"
              >
                <div className="w-1/2 p-2 font-medium">{item.team}</div>
                <div className="w-1/4 border-l border-gray-300">
                  <div className="bg-[#72bbef] p-1 text-center font-bold">
                    {item.back}
                  </div>
                  <div className="bg-[#72bbef] p-1 text-center text-xs">
                    {item.backAmount}
                  </div>
                </div>
                <div className="w-1/4 border-l border-gray-300">
                  <div className="bg-[#faa9ba] p-1 text-center font-bold">
                    {item.lay}
                  </div>
                  <div className="bg-[#faa9ba] p-1 text-center text-xs">
                    {item.layAmount}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center bg-white text-white ">
              <div className="flex w-fit items-center p-2 rounded-tr-xl bg-gray-800 ">
                <span className="font-bold">Bookmakers</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01"
                  />
                </svg>
              </div>
              <div className="text-xs text-black mr-2 font-semibold">
                Matched € 9.6K
              </div>
            </div>

            {bookmakerData.map((item, index) => (
              <div
                key={index}
                className="flex text-sm border-t border-gray-200 relative"
              >
                <div className="w-1/2 p-2 font-medium">{item.team}</div>
                <div className="w-1/4 border-l border-gray-300">
                  <div className="bg-[#72bbef] p-1 text-center font-bold">
                    {item.back}
                  </div>
                  <div className="bg-blue-100 p-1 text-center text-xs">
                    {item.backAmount}
                  </div>
                </div>
                <div className="w-1/4 border-l border-gray-300">
                  <div className="bg-pink-200 p-1 text-center font-bold">
                    {item.lay}
                  </div>
                  <div className="bg-pink-100 p-1 text-center text-xs">
                    {item.layAmount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bookmakers Section */}
        <div
          className={`${activeSection === "Bookmakers" ? "block" : "hidden"}`}
        >
          <div className="flex justify-between items-center bg-gray-800 text-white p-2">
            <div className="flex items-center">
              <span className="font-bold">Bookmakers</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01"
                />
              </svg>
            </div>
            <div className="text-xs">Matched € 292.1K</div>
          </div>

          <div className="border-b border-gray-300">
            <div className="flex text-sm">
              <div className="w-1/2 p-2"></div>
              <div className="w-1/4 p-2 text-center bg-gray-200 border-l border-gray-300">
                Back
              </div>
              <div className="w-1/4 p-2 text-center bg-pink-200 border-l border-gray-300">
                Lay
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-gray-800 p-1 flex justify-around">
        <button
          className={`px-4 py-2 rounded-full ${
            activeSection === "Winner"
              ? "bg-white text-gray-800"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setActiveSection("Winner")}
        >
          Winner
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeSection === "Bookmakers"
              ? "bg-white text-gray-800"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setActiveSection("Bookmakers")}
        >
          Bookmakers
        </button>
      </div>
    </div>
  );
};

export default Fullgame;
