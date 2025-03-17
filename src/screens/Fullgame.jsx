import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import CircularHorizontalLoader from "../components/loader";

const Fullgame = () => {
  const [activeTab, setActiveTab] = useState("Winner");
  const [activeSection, setActiveSection] = useState("Winner");
  const [apiData, setApiData] = useState([]);
  const tabs = ["All", "Popular", "Winner", "Bookmakers"];
  const [loder, setLoader] = useState(false);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const sid = searchParams.get("sid");
  const [selectedBet, setSelectedBet] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const betAmounts = [5, 200, 300, 400, 500, 1000, 2000, 5000];
  // Track which row has an open modal
  const [openModalSection, setOpenModalSection] = useState({
    dataIndex: null,
    sectionIndex: null,
  });

  const fetchGameDetails = async () => {
    try {
      const response = await axios.post("https://titan97.live/get-bookmaker", {
        gmid: id,
        sid: sid,
      });

      setApiData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(fetchGameDetails, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      await fetchGameDetails();
      setLoader(false);
    };
    fetchData();
  }, []);

  const handleBackClick = (dataIndex, sectionIndex, item, odds) => {
    setSelectedBet({
      team: item.nat,
      odds: odds,
      type: "Back",
    });
    setOpenModalSection({
      dataIndex: dataIndex,
      sectionIndex: sectionIndex,
    });
  };

  const handleLayClick = (dataIndex, sectionIndex, item, odds) => {
    setSelectedBet({
      team: item.nat,
      odds: odds,
      type: "Lay",
    });
    setOpenModalSection({
      dataIndex: dataIndex,
      sectionIndex: sectionIndex,
    });
  };

  const handleBetAmountChange = (amount) => {
    setBetAmount(amount);
  };

  const handlePlaceBet = () => {
    closeModal();
  };

  const closeModal = () => {
    setOpenModalSection({
      dataIndex: null,
      sectionIndex: null,
    });
    setSelectedBet(null);
    setBetAmount(0);
  };

  const isModalOpen = (dataIndex, sectionIndex) => {
    return (
      openModalSection.dataIndex === dataIndex &&
      openModalSection.sectionIndex === sectionIndex
    );
  };

  if (loder) {
    return <CircularHorizontalLoader />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded shadow relative">
      {/* Header */}
      <div className="relative">
        <iframe
          src={`https://titan97.live/get-livesports?gmid=${id}&sid=${sid}`}
          className="w-full h-screen"
          allowFullScreen="true"
        />
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-scroll scroll-smooth w-full gap-1 p-2 text-white bg-gray-200 border-b border-gray-300">
        {apiData?.map((tab) => (
          <button
            key={tab}
            className={`p-2 font-bold border-1 border-black rounded-4xl text-sm ${
              activeTab === tab?.mname
                ? "bg-[#016630] text-white"
                : "bg-[#2c485a]"
            }`}
            onClick={() => setActiveTab(tab?.mname)}
          >
            {tab?.mname}
          </button>
        ))}
      </div>
      {apiData && apiData.length
        ? apiData.map((data, dataIndex) => (
            <div key={dataIndex} className="bg-white relative">
              {/* Winner Section */}
              <div
                className={`${activeSection === "Winner" ? "block" : "hidden"}`}
              >
                <div className="flex justify-between items-center bg-white text-white">
                  <div className="flex w-fit items-center p-2 rounded-tr-xl bg-gray-800">
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
                  {dataIndex === 0 && (
                    <div className="flex font-bold text-sm">
                      <div className="w-1/2 p-2"></div>
                      <div className="w-1/4 p-2 text-center bg-[#72bbef] border-l border-gray-300">
                        Back
                      </div>
                      <div className="w-1/4 p-2 text-center bg-[#faa9ba] border-l border-gray-300">
                        Lay
                      </div>
                    </div>
                  )}

                  <div className="relative">
                    {data.section.map((item, sectionIndex) => (
                      <React.Fragment key={sectionIndex}>
                        <div className="flex relative text-[15px] text-sm border-t border-gray-200">
                          <div className="w-1/2 p-2 font-medium">
                            {item?.nat}
                          </div>

                          {item.gstatus !== "" && item.gstatus !== "ACTIVE" ? (
                            <div className="text-black font-semibold flex items-center justify-center w-1/2  bg-red-500/30">
                              {item.gstatus}
                            </div>
                          ) : (
                            <div className=" w-1/2 flex h-full">
                              <button
                                onClick={() =>
                                  handleBackClick(
                                    dataIndex,
                                    sectionIndex,
                                    item,
                                    item.odds[0]?.odds
                                  )
                                }
                                className="w-full bg-transparent"
                              >
                                <div className="bg-[#72bbef] text-center font-bold">
                                  {item.odds[0]?.odds}
                                </div>
                                <div className="bg-[#72bbef] text-center">
                                  {item.odds[0]?.size}
                                </div>
                              </button>
                              <button
                                onClick={() =>
                                  handleLayClick(
                                    dataIndex,
                                    sectionIndex,
                                    item,
                                    item.odds[0]?.odds
                                  )
                                }
                                className="w-full bg-transparent"
                              >
                                <div className="bg-[#faa9ba] text-center font-bold">
                                  {item.odds[0]?.odds}
                                </div>
                                <div className="bg-[#faa9ba] text-center">
                                  {item.odds[0]?.size}
                                </div>
                              </button>
                            </div>
                          )}
                          {/* <div className="w-1/4 relative border-l border-gray-300"></div>

                          <div className="w-1/4 relative border-l border-gray-300">
                            {item.gstatus !== "" ? (
                              <div className="text-black font-semibold flex items-center justify-center absolute h-full w-full left-0 top-0 bg-yellow-200">
                                {item.gstatus}
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  handleLayClick(
                                    dataIndex,
                                    sectionIndex,
                                    item,
                                    item.odds[0]?.odds
                                  )
                                }
                                className="w-full bg-transparent"
                              >
                                <div className="bg-[#faa9ba] text-center font-bold">
                                  {item.odds[0]?.odds}
                                </div>
                                <div className="bg-[#faa9ba] text-center">
                                  {item.odds[0]?.size}
                                </div>
                              </button>
                            )}
                          </div> */}
                        </div>

                        {/* Inline Betting Modal */}
                        {isModalOpen(dataIndex, sectionIndex) &&
                          selectedBet && (
                            <div className="w-full text-lg bg-gray-100 p-2">
                              <div
                                className={`p-2 text-white ${
                                  selectedBet.type === "Back"
                                    ? "bg-[#72bbef]"
                                    : "bg-[#faa9ba]"
                                } flex justify-between items-center`}
                              >
                                <span>{selectedBet.team}</span>
                                <div className="flex items-center">
                                  <div className="font-bold text-lg">
                                    {selectedBet.odds}
                                  </div>
                                  <button
                                    onClick={closeModal}
                                    className="ml-2 text-white"
                                  >
                                    <svg
                                      className="w-5 h-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>

                              <div className="p-4 bg-white">
                                <div className="flex items-center justify-between mb-4">
                                  <button
                                    onClick={() =>
                                      setBetAmount(Math.max(0, betAmount - 1))
                                    }
                                    className="bg-gray-200 p-2 rounded-l-lg"
                                  >
                                    <span className="text-xl font-bold">−</span>
                                  </button>
                                  <input
                                    type="number"
                                    value={betAmount}
                                    onChange={(e) =>
                                      setBetAmount(Number(e.target.value))
                                    }
                                    className="p-2 text-center w-full mx-1 border rounded"
                                  />
                                  <button
                                    onClick={() => setBetAmount(betAmount + 1)}
                                    className="bg-gray-200 p-2 rounded-r-lg"
                                  >
                                    <span className="text-xl font-bold">+</span>
                                  </button>
                                </div>

                                <div className="grid grid-cols-4 gap-2 mb-4">
                                  {betAmounts.map((amount) => (
                                    <button
                                      key={amount}
                                      onClick={() =>
                                        handleBetAmountChange(amount)
                                      }
                                      className="bg-gray-100 py-2 text-center rounded border"
                                    >
                                      {amount}
                                    </button>
                                  ))}
                                </div>

                                <div className="flex space-x-2">
                                  <button
                                    onClick={closeModal}
                                    className="w-1/2 py-3 text-center rounded border border-gray-300"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={handlePlaceBet}
                                    className="w-1/2 py-3 text-center text-white rounded bg-blue-600"
                                  >
                                    Place Bet
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                      </React.Fragment>
                    ))}

                    {/* {!data?.iplay && (
                      <div className="w-full h-full absolute top-0 left-0 bg-white/50 border-2 border-black flex items-center justify-center font-bold text-lg">
                        <p className="text-black">SUSPENDS</p>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Fullgame;
