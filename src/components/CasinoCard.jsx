import React from "react";
import { useNavigate } from "react-router";

const CasinoCard = ({ game }) => {
  const navigate = useNavigate();


  

  return (
    <div
      onClick={() => navigate(`/casino/${game.gmid}`, { state: game })}
      className="relative shadow-lg rounded-md mb-4 cursor-pointer bg-gradient-to-b from-red-600 to-red-800 min-h-[140px] transition-transform duration-200 hover:scale-105 flex flex-col"
    >
      <img
        src={`https://nd.sprintstaticdata.com/casino-icons/lc/${game.imgpath}`}
        alt={game.gname}
        className="w-full h-[120px] object-cover rounded-t-md"
      />
      <div className="mt-auto text-center text-xs min-h-[24px] text-black font-semibold py-2 px-4 rounded-b-md bg-gradient-to-b from-red-500 to-red-700">
        {game.gname}
      </div>
    </div>
  );
};

export default CasinoCard;
