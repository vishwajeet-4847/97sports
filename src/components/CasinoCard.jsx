import React from "react";
import { useNavigate } from "react-router";

const CasinoCard = ({ imageSrc, title }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/casion/1")}
      className="relative shadow-[0_5px_9px_-3px_rgba(0,0,0,0.3)] rounded-[4px] mb-[15px] cursor-pointer bg-gradient-to-b from-[#f72424] to-[#bb1c00]  min-h-[112px] "
    >
      <a className="block">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover "
        />
        <div className="casino-bottom mt-2 text-center text-[10px] min-h-[20px]  text-black font-semibold py-2 px-4 rounded-b-md bg-gradient-to-b from-[#f72424] to-[#bb1c00]">
          {title}
        </div>
      </a>
    </div>
  );
};

export default CasinoCard;
