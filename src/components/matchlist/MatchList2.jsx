

import React, { useState, useRef } from "react";
import MatchRow from "./MatchRow";
import CountryTab from "../CountryTab";

const MatchList = ({ matchList, isHome = false, isCountryHeader = false , classname , noPins , showHeaders}) => {
  const [activeCountry, setActiveCountry] = useState("ALL");

  const countryRowRef = useRef();

  if (!matchList || matchList.length === 0) {
    return <p className="text-center text-blue-500">No matches found</p>;
  }

  // Use the matches directly from the array instead of combining t1 and t2
  const matches = Array.isArray(matchList) ? matchList : [];

  // Extract unique countries from the matches when isCountryHeader is true
  const countries = isCountryHeader
    ? [
        { code: "ALL", title: "ALL" },
        ...Array.from(
          new Set(
            matches
              .filter((match) => match.cname)
              .map((match) => match.cname)
          )
        ).map((code) => ({ code, title: code })),
      ]
    : [];

  // Filter matches based on selected country when isCountryHeader is true
  const displayedMatches = isCountryHeader
    ? activeCountry === "ALL"
      ? matches
      : matches.filter((match) => match.cname === activeCountry)
    : matches;

  const handleCountryClick = (countryCode) => {
    setActiveCountry(countryCode);
  };

  // Function to render match rows based on data structure
  const renderMatches = (matches) => {
    return matches.flatMap((match, index) => {
      // Check if match has children
      if (match.children && match.children.length > 0) {
        return match.children.map((childMatch, childIndex) => (
          <MatchRow
            key={`match-${index}-child-${childIndex}`}
            match={childMatch}
            isCountryHeader={isCountryHeader}
            noPins={noPins}
          />
        ));
      } else {
        return (
          <MatchRow
            key={`match-${index}`}
            match={match}
            noPins={noPins}
          />
        );
      }
    });
  };

  return (
    <div
      className={`w-full relative ${classname || "h-[260px] max-h-[260px]"} overflow-y-auto custom-scrollbar ${
        isHome && "border-b-4 border-[#265e04]"
      } md:max-h-none`}
    >
      {/* Only render country tabs when isCountryHeader is true */}
      {isCountryHeader && countries.length > 0 && (
        <div className="w-full overflow-x-auto custom-scrollbar bg-gray-100 ">
          <div
            className="w-full border-collapse"
            style={{ minWidth: countries.length * 80 + "px" }}
          >
            <div className="flex overflow-x-auto custom-scrollbar" ref={countryRowRef}>
              {countries.map((country) => (
                <CountryTab
                  key={country.code}
                  country={country}
                  isActive={activeCountry === country.code}
                  onClick={() => handleCountryClick(country.code)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <table className="w-full text-[12px] border-b border-[#c8ced3] text-[#212529] bg-transparent align-top mb-4 md:mb-0 md:border-none">
        { !showHeaders && <thead className="bg-[#dddcd6] text-[#000000] hidden md:table-header-group">
          <tr>
            <th className="text-left"></th>
            <th className="text-center"></th>
            <th className="text-center hidden md:table-cell">
              {!isCountryHeader && "1"}
            </th>
            <th className="text-center hidden md:table-cell">
              {!isCountryHeader && "X"}
            </th>
            <th className="text-center hidden md:table-cell">
              {!isCountryHeader && "2"}
            </th>
            <th></th>
          </tr>
        </thead>}
        <tbody className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] align-middle border border-inherit">
          {renderMatches(displayedMatches)}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;