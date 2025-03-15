import React, { useState, useRef} from "react";

import MatchRow from "./MatchRow";
import CountryTab from "./CountryTab";


const MatchList = ({ matchList, isHome = false, isCountryHeader = false }) => {
  const [activeCountry, setActiveCountry] = useState("ALL");
 
const countryRowRef = useRef();

  

  if (!matchList || (!matchList.t1?.length && !matchList.t2?.length)) {
    return <p className="text-center text-gray-500">No matches found</p>;
  }

  const combinedMatches = [...(matchList.t1 || []), ...(matchList.t2 || [])];
  
  // Extract unique countries from the matches when isCountryHeader is true
  const countries = isCountryHeader ? [
    { code: "ALL", title: "ALL" },
    ...Array.from(new Set(
      combinedMatches
        .filter(match => match.cname)
        .map(match => match.cname)
    )).map(code => ({ code, title: code }))
  ] : [];

  
  // Filter matches based on selected country when isCountryHeader is true
  const displayedMatches = isCountryHeader 
    ? (activeCountry === "ALL" 
      ? combinedMatches 
      : combinedMatches.filter(match => match.cname === activeCountry))
    : combinedMatches;

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
          />
        ));
      } else {
        return (
          <MatchRow 
            key={`match-${index}`} 
            match={match} 
          />
        );
      }
    });
  };

  return (
    <div
      className={`w-full relative h-[260px] max-h-[260px] overflow-y-auto custom-scrollbar ${
        isHome && "border-b-4 border-[#265e04]"
      } md:max-h-none`}
    >
      {/* Only render country tabs when isCountryHeader is true */}
      {isCountryHeader && countries.length > 0 && (
        <div className="w-full overflow-x-auto custom-scrollbar bg-gray-100">
          <table className="w-full border-collapse" style={{ minWidth: countries.length * 80 + "px" }}>
            <tbody>
           
            <div className="flex overflow-x-auto custom-scrollbar"  ref={countryRowRef }>
                {countries.map((country) => (
                  <CountryTab
                  key={country.code}
                  country={country}
                  isActive={activeCountry === country.code}
                  onClick={() => handleCountryClick(country.code)}
                />
                ))}
              </div>
            </tbody>
          </table>
        </div>
      )}

      <table className="w-full text-[12px] border-b border-[#c8ced3] text-[#212529] bg-transparent align-top mb-4 md:mb-0 md:border-none">
        <thead className="bg-[#dddcd6] text-[#000000] hidden md:table-header-group">
          <tr>
            <th className="text-left"></th>
            <th className="text-center"></th>
            <th className="text-center hidden md:table-cell">{!isCountryHeader && "1"}</th>
            <th className="text-center hidden md:table-cell">{!isCountryHeader && "X"}</th>
            <th className="text-center hidden md:table-cell">{!isCountryHeader && "2"}</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] align-middle border border-inherit">
          {renderMatches(displayedMatches)}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;