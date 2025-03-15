import React from "react";

import MatchRow from "./MatchRow";
import CountryTab from "./CountryTab";

const MatchList = ({ matchList, isHome = false, isCountryHeader = false }) => {
  if (!matchList || (!matchList.t1?.length && !matchList.t2?.length)) {
    return <p className="text-center text-gray-500">No matches found</p>;
  }

  const combinedMatches = [...(matchList.t1 || []), ...(matchList.t2 || [])];

  console.log(combinedMatches);

  return (
    <div
      className={`w-full relative h-[260px] max-h-[260px] overflow-y-auto custom-scrollbar ${
        isHome && "border-b-4 border-[#265e04]"
      } md:max-h-none`}
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
          {combinedMatches.map((match, index) => {
            return (
              <React.Fragment key={index}>
                {isCountryHeader && <tr>match.</tr>}
                <MatchRow match={match} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;
