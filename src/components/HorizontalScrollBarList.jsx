import React from "react";

const HorizontalScrollList = ({ items }) => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
      <div className="flex space-x-4 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[150px] p-3 bg-white shadow-md rounded-md text-center cursor-pointer hover:bg-gray-100 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollList;