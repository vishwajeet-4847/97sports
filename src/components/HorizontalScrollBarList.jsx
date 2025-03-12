import React from "react";
import cricket from "/cricket.png";
import aviator from "/aviator.png";
import search from "/search.png";

const HorizontalScrollList = ({ setSearchBar }) => {
  const activeTab = "Cricket";

  return (
    <div className="w-full bg-red-600 relative ">
      <div className="flex overflow-x-auto items-center whitespace-nowrap flex-nowrap scrollbar-hide w-full gap-3 ">
        {/* aviator div  */}
        <div className=" h-8 min-w-fit whitespace-nowrap rounded-tr-lg rounded-tl-lg ml-2 bg-black p-2 mt-2  ">
          <div className="flex gap-1 h-full text-base font-bold items-center scale-animation">
            <img src={aviator} className="h-6" alt="" />
            <p>Vimaan</p>
          </div>
        </div>

        {/* cricket div */}
        <div
          className={` h-6 min-w-fit whitespace-nowrap  flex items-center ${
            activeTab == "Cricket" ? "text-white " : "text-black "
          } font-bold`}
        >
          <img
            className={` ${
              activeTab == "Cricket" ? "" : "invert grayscale "
            } h-6 bg-blend-color-burn`}
            src={cricket}
            alt=""
          />
          <p> Cricket </p>
        </div>
        <div
          className={` h-6 min-w-fit whitespace-nowrap  flex items-center ${
            activeTab == "Cricket" ? "text-white " : "text-black "
          } font-bold`}
        >
          <img
            className={` ${
              activeTab == "Cricket" ? "" : "invert grayscale "
            } h-6 bg-blend-color-burn`}
            src={cricket}
            alt=""
          />
          <p> Cricket </p>
        </div>
        <div
          className={` h-6 min-w-fit whitespace-nowrap  flex items-center ${
            activeTab == "Cricket" ? "text-white " : "text-black "
          } font-bold`}
        >
          <img
            className={` ${
              activeTab == "Cricket" ? "" : "invert grayscale "
            } h-6 bg-blend-color-burn`}
            src={cricket}
            alt=""
          />
          <p> Cricket </p>
        </div>

        {/* search bar  */}
        <div className=" h-full bg-red-700 absolute right-0 flex items-center justify-center p-4 cursor-pointer ">
          <img
            src={search}
            onClick={() => setSearchBar(true)}
            className=" h-5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollList;
