import React from "react";
import { useNavigate } from "react-router";

const MatchList = ({ marketData, isHome = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`w-full relative max-h-[260px] overflow-x-auto custom-scrollbar ${
        isHome && "border-b-4 border-[#265e04]"
      }  md:max-h-none`}
    >
      <table className="w-full text-[12px] border-b border-[#c8ced3] text-[#212529] bg-transparent align-top mb-4 md:mb-0 md:border-none">
        <thead className="bg-[#dddcd6] text-[#000000] hidden md:table-header-group">
          <tr>
            <th className="text-left"></th>
            <th className="text-center"></th>
            <th className="text-center hidden md:table-cell">1</th>
            <th className="text-center hidden md:table-cell">X</th>
            <th className="text-center hidden md:table-cell">2</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] align-middle border border-inherit">
          {marketData.map((market) => (
            <tr key={market.id} className="border-b border-[#c8ced3]">
              {/* Match Name & Time */}
              <td className="px-2 py-2 text-left">
                <a
                  onClick={() => navigate(`/fullgame/${marketData.id}`)}
                  href="#"
                  className="font-bold text-[#2789ce] no-underline"
                >
                  {market.eventName}
                </a>
                {market.matchTime && (
                  <p className="text-gray-600 text-xs">{market.matchTime}</p>
                )}
                {market.inPlay && (
                  <span className="text-red-500 text-xs font-semibold ml-2 color-change-animation">
                    In-Play
                  </span>
                )}
              </td>

              {/* Combined Markets (BM, F, S) */}
              <td className="px-2 py-2 text-center">
                {market.marketInfo.map((info, idx) => (
                  <span
                    key={idx}
                    className={`
                    font-bold italic px-[5px] rounded-[4px] text-[12px]  text-white
                    ${
                      info === "S"
                        ? "bg-gradient-to-b from-[#f26d1c] to-[#d14100]"
                        : ""
                    }
                    ${
                      info === "BM"
                        ? "bg-gradient-to-t from-[#14213d] to-[#315195] italic"
                        : ""
                    }
                    ${
                      info === "F"
                        ? "bg-gradient-to-b from-[#0a92a5] to-[#076875] "
                        : ""
                    }
                  `}
                  >
                    {info}
                  </span>
                ))}
              </td>

              {/* Odds (Hidden in small screens, visible in lg screens) */}
              {market.odds.map((odd, index) => (
                <td
                  key={index}
                  className="text-center px-2 py-1 hidden md:table-cell"
                >
                  <span className="bg-blue-400 text-black font-bold px-2 py-1 ">
                    {odd.back}
                  </span>
                  <span className="bg-red-400 text-black font-bold px-2 py-1 ml-1 ">
                    {odd.lay}
                  </span>
                </td>
              ))}

              {/* Add to Multi Markets Icon */}
              {market.addToMultiMarkets && (
                <td className="px-4 py-2 text-center w-[25px]">
                  <a
                    href="#"
                    title="Add to Multi Markets"
                    className="text-[#7e97a7] cursor-pointer h-[6.666667vh] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="currentColor"
                    >
                      <path d="M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25zm0-1C18.85 24 24 18.85 24 12.5S18.85 1 12.5 1 1 6.15 1 12.5 6.15 24 12.5 24zm5.09-12.078c1.606.516 2.41 1.13 2.41 2.19 0 .373-.067.616-.2.73-.135.115-.403.173-.804.173H13.57l-.81 7.988h-.536l-.795-7.988H6.003c-.4 0-.67-.065-.803-.194-.133-.128-.2-.364-.2-.708 0-1.06.804-1.674 2.41-2.19.09 0 .18-.03.27-.086.49-.172.802-.444.936-.816L9.82 5.95v-.216c0-.23-.222-.415-.668-.558l-.067-.043h-.067c-.536-.143-.804-.387-.804-.73 0-.402.09-.652.268-.753.18-.1.49-.15.938-.15h6.16c.447 0 .76.05.938.15.178.1.268.35.268.752 0 .344-.268.588-.804.73h-.067l-.067.044c-.446.143-.67.33-.67.558v.215l1.206 5.07c.134.372.446.644.937.816.09.057.18.086.27.086z"></path>
                    </svg>
                  </a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;
