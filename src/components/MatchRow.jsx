import React from "react";
import { useNavigate } from "react-router";
import PinButton from "./PinButton";

const MatchRow = ({ match , isCountryHeader }) => {
  const navigate = useNavigate();
  console.log(match);
  

  return (
    <tr key={`match-${match.gmid}`} className="border-b border-[#c8ced3]">
      {/* Event Name */}
      <td className="px-2 py-2 text-left">
        <a
          onClick={() => navigate(`/fullgame/${match.gmid}`)}
          href="#"
          className="font-bold text-[#2789ce] no-underline"
        >
          {match.ename}
        </a>
        {match.iplay && (
          <span className="text-red-500 text-sm font-semibold ml-2 color-change-animation">
            In-Play
          </span>
        )}
        {match.stime && <p className="text-gray-600 text-xs">{match.stime}</p>}
      </td>

      {/* Match Info Badges */}
      <td className="px-2 py-2 text-center">
        {match.bm && (
          <span className="font-bold italic px-[5px] rounded-[4px] text-[12px] text-white bg-gradient-to-t from-[#14213d] to-[#315195]">
            BM
          </span>
        )}
        {match.s && (
          <span className="font-bold italic px-[5px] rounded-[4px] text-[12px] text-white bg-gradient-to-b from-[#f26d1c] to-[#d14100]">
            S
          </span>
        )}
        {match.f && (
          <span className="font-bold italic px-[5px] rounded-[4px] text-[12px] text-white bg-gradient-to-b from-[#0a92a5] to-[#076875]">
            F
          </span>
        )}
      </td>

      {/* Pin Button */}
      <td className="text-center px-2 py-1 ">
        <PinButton />
      </td>

      {/* Odds Display */}
      { match.section?.odds?.map((odd, index) => (
        <td key={index} className="text-center px-2 py-1 hidden md:table-cell">
          <span className="bg-blue-400 text-black font-bold px-2 py-1">{odd.back}</span>
          <span className="bg-red-400 text-black font-bold px-2 py-1 ml-1">{odd.lay}</span>
        </td>
      ))}
    </tr>
  );
};

export default MatchRow;
