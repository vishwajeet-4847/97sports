import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import LiveStreaming from "../components/LiveStreaming";

export const EventDetails = () => {
  
  // Game data
  const { id:gmid } = useParams();
  const location = useLocation();
  const game = location.state;
console.log(gmid);

  const [timeRemaining, setTimeRemaining] = useState(37);
  const [suspended, setSuspended] = useState(false);

  // Player data
  const players = [
    { id: "A", cards: [3, 3, 3] },
    { id: "B", cards: [2, 2, 2] },
  ];

  // Betting options
  const bettingOptions = [
    {
      title: "WINNER",
      ratio: null,
      options: [
        { player: "PLAYER A", odds: 1.98, value: 994100 },
        { player: "PLAYER B", odds: 1.98, value: 995800 },
      ],
    },
    {
      title: "PAIR ( DUBBLE ) 1:4",
      ratio: "1:4",
      options: [
        { player: "PLAYER A ( PAIR )", odds: 4, value: 500000 },
        { player: "PLAYER B ( PAIR )", odds: 4, value: 500000 },
      ],
    },
    {
      title: "FLUSH ( COLOR ) 1:8",
      ratio: "1:8",
      options: [
        { player: "PLAYER A ( FLUSH )", odds: 8, value: 500000 },
        { player: "PLAYER B ( FLUSH )", odds: 8, value: 500000 },
      ],
    },
    {
      title: "STRAIGHT ( ROWN ) 1:14",
      ratio: "1:14",
      options: [
        { player: "PLAYER A ( STRAIGHT )", odds: 14, value: 500000 },
        { player: "PLAYER B ( STRAIGHT )", odds: 14, value: 500000 },
      ],
    },
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setSuspended(true);
          return 30; // Reset to 30 seconds
        }
        setSuspended(false);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-grey text-white">
      {/* Video Section with Fixed Height */}
      <div className="relative w-full h-[200px] bg-black">
        {/* Video Player */}
        <LiveStreaming url={`https://titan97.live/get-video/${gmid}`} />

        {/* Overlay on Video */}
        <div className="absolute inset-0 flex p-2 text-white z-30">
          {/* Players' Cards (Left Overlay) */}
          <div className="flex flex-col gap-2 p-2 rounded-md">
            {players.map((player, index) => (
              <div key={index} className="mb-2">
                <div className="text-xs mb-1">PLAYER {player.id}</div>
                <div className="flex gap-1">
                  {player.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="w-8 h-12 bg-red-500 rounded text-center p-1 border border-white"
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Game ID & Timer (Top Right) */}
          <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
            <div className="text-xs bg-black px-2 py-1 rounded-md">RID: {gmid}</div>
            <div className="bg-black text-white text-2xl font-bold px-4 py-2 rounded-md">
              {timeRemaining}
            </div>
          </div>
        </div>
      </div>

      {/* Betting Options */}
      <div className="mt-4 p-2">
        {bettingOptions.map((section, index) => (
          <div key={index} className="border border-gray-500 rounded overflow-hidden mb-2">
            {/* Section Header */}
            <div className="bg-blue-800 text-white p-2 font-bold flex justify-between">
              <span>{section.title}</span>
              <span className="text-white bg-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                i
              </span>
            </div>

            {/* Section Rows */}
            {section.options.map((option, optIndex) => (
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
