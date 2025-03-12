


import React, { useState } from "react";

const BottomNavigationBar = () => {
  const Menus = [
    { name: "Home", icon: "fa-home" },
    { name: "In-play", icon: "fa-running" },
    { name: "Sports", icon: "fa-futbol" }, // Default Active (Middle One)
    { name: "Casino", icon: "fa-dice" },
    { name: "Account", icon: "fa-user" },
  ];

  const [active, setActive] = useState(2); // Default active (middle)

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1c313d] p-2 lg:hidden z-100 ">
      <ul className="flex justify-between relative">
        {Menus.map((menu, i) => (
          <li key={i} className="flex-1 relative">
            <button
              onClick={() => setActive(i)}
              className={`flex flex-col items-center w-full py-2 transition relative text-2xl  ${
                active === i ? "text-[#305d7a]" : "text-white"
              } ${i === 2 ? "relative z-10" : ""}`}
            >
              {/* Pop-out effect for middle element */}
              {i === 2 && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#305d7a] rounded-full border-4 border-[#1c313d] flex items-center justify-center shadow-lg">
                  <i className={`fas ${menu.icon} text-2xl text-white`}></i>
                </div>
              )}

              {/* Normal Icons */}
              {i !== 2 && <i className={`fas ${menu.icon} text-xl`}></i>}
              {i !== 2 && <span className="text-xs">{menu.name}</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigationBar;
