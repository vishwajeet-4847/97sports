import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router";

const Fullgame = () => {
  const [activeTab, setActiveTab] = useState("Winner");
  const [activeSection, setActiveSection] = useState("Winner");
  const [apiData, setApiData] = useState([]);
  const tabs = ["All", "Popular", "Winner", "Bookmakers"];

  
 

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const sid = searchParams.get("sid");

  useEffect(() => {
    const fetchGameDetails = async () => {
      console.log("fetching details ");

      try {
        const response = await axios.post(
          "https://titan97.live/get-bookmaker",
          {
            gmid: id,
            sid: sid,
          }
        );

        console.log(response.data);
        const filteredData = response.data.data.filter((data) =>
          ["MATCH_ODDS", "Bookmaker", "TIED_MATCH"].includes(data.mname)
        );
        setApiData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGameDetails();
  }, []);

  console.log(apiData);

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-100 overflow-hidden rounded shadow">
      {/* Header */}
      <div className="relative">
        <img
          src="https://97sports.in/CricketBanner.fa7d242575eddf8f.jpg"
          alt=""
          className=" h-36 w-full"
        />
      </div>

      {/* Tabs */}
      <div className="flex w-full gap-1 p-2 text-white bg-gray-200 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`p-2 font-bold border-1 border-black rounded-4xl text-sm ${
              activeTab === tab ? "bg-[#016630] text-white" : "bg-[#2c485a]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {apiData &&
        apiData.length &&
        apiData.map((data) => (
          <>
            <div className="bg-white">
              {/* Winner Section */}
              <div
                className={`${activeSection === "Winner" ? "block" : "hidden"}`}
              >
                <div className="flex justify-between items-center bg-white text-white ">
                  <div className="flex w-fit items-center p-2 rounded-tr-xl bg-gray-800 ">
                    <span className="font-bold text-xs">{data.mname}</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01"
                      />
                    </svg>
                  </div>
                  <div className="text-xs text-black mr-2 font-semibold">
                    Matched € 9.6K
                  </div>
                </div>

                <div className="border-b text-[5px] border-gray-300">
                  <div className="flex font-bold text-sm">
                    <div className="w-1/2 p-2"></div>
                    <div className="w-1/4 p-2 text-center bg-[#72bbef] border-l border-gray-300">
                      Back
                    </div>
                    <div className="w-1/4 p-2 text-center bg-[#faa9ba] border-l border-gray-300">
                      Lay
                    </div>
                  </div>

                  {data.section.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-[15px] text-sm border-t border-gray-200"
                    >
                      <div className="w-1/2 p-2 font-medium">{item?.nat}</div>
                      <div className="w-1/4 border-l border-gray-300">
                        <div className="bg-[#72bbef] p-1 text-center font-bold">
                          {item.odds[0]?.odds}
                        </div>
                        <div className="bg-[#72bbef] p-1 text-center ">
                          {item.odds[0]?.size}
                        </div>
                      </div>
                      <div className="w-1/4 border-l border-gray-300">
                        <div className="bg-[#faa9ba] p-1 text-center font-bold">
                          {item.odds[0]?.odds}
                        </div>
                        <div className="bg-[#faa9ba] p-1 text-center ">
                          {item.odds[0]?.size}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      {/* Sections */}
    </div>
  );
};

export default Fullgame;
