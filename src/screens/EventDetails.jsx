import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router";
import { CasinoContext } from "../services/casino/casino.context";
import LiveStreaming from "../components/LiveStreaming";
import Cards from "../components/Cards";

export const EventDetails = () => {
  const { id: gmid } = useParams();
  const { getCasinoDetails } = useContext(CasinoContext);
  // Use ref to maintain stable reference to the context function
  const getCasinoDetailsRef = useRef(getCasinoDetails);

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(37);
  const [suspended, setSuspended] = useState(false);

  // Update ref when context function changes
  useEffect(() => {
    getCasinoDetailsRef.current = getCasinoDetails;
  }, [getCasinoDetails]);

  // Fetch game details on component mount - always fetch from API
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        
        const fetchedGame = await getCasinoDetailsRef.current(gmid);
        if (fetchedGame) {
          setGame(fetchedGame);
        } else {
          setError("Game not found!");
        }
      } catch (err) {
        console.error("Error fetching game details:", err);
        setError("Failed to load game details");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gmid]); // Only gmid in the dependency array

 

  

  // Show loading if game is not yet fetched
  if (loading) {
    return <div className="text-white">Loading game data...</div>;
  }

  // Show error if fetch failed
  if (error) {
    return <div className="text-white bg-red-500 p-4 rounded">{error}</div>;
  }

  // Make sure game data is available
  if (!game) {
    return <div className="text-white">No game data available</div>;
  }
  console.log(game);
  
  return (
    <div className="flex flex-col w-full h-full bg-grey text-white">
      {/* Video Section */}
      <div className="relative w-full h-[200px] bg-black">
        <LiveStreaming url={`https://titan97.live/get-video/${gmid}`} />

        {/* Overlay */}
        <div className="absolute inset-0 flex p-2 text-white z-30">
          {/* Players' Cards (Left) */}
          <div className="flex flex-col gap-2 p-2 rounded-md">
          <div className="text-xs mb-1">PLAYER {game.nat}</div>
          <div className="flex items-center mb-2 gap-0.5">
            {game.card && game.card.split(",").map((card, index) => (
           
             
                
                   <Cards key={index} cardType={card}/>
                  ))}
             
             </div>
         
          </div>

          {/* Game ID & Timer (Top Right) */}
          <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
            <div className="text-xs bg-black px-2 py-1 rounded-md">RID: {game.mid}</div>
            <div className="bg-black text-white text-2xl font-bold px-4 py-2 rounded-md">
              {timeRemaining}
            </div>
          </div>
        </div>
      </div>

      {/* Betting Options */}
      <div className="mt-4 p-2">
        {game.bettingOptions && game.bettingOptions.map((section, index) => (
          <div key={index} className="border border-gray-500 rounded overflow-hidden mb-2">
            {/* Section Header */}
            <div className="bg-blue-800 text-white p-2 font-bold flex justify-between">
              <span>{section.title}</span>
              <span className="text-white bg-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                i
              </span>
            </div>

            {/* Section Rows */}
            {section.options && section.options.map((option, optIndex) => (
              <div key={optIndex} className="flex border-b border-gray-400 relative">
                <div className="w-2/3 bg-white text-black p-2">{option.player}</div>
                <div className="w-1/3 bg-blue-300 text-center p-2 flex flex-col justify-center">
                  <div className="font-bold">{option.odds}</div>
                  <div className="text-xs">{option.value}</div>
                </div>

                {/* Suspended overlay */}
                {suspended && (
                  <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">SUSPENDED</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};