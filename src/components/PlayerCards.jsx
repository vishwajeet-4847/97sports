import Cards from "./Cards";

const PlayerCards = ({ playerName, cards }) => {
    if (cards.length<1) return null;
    return (
      <div className="mb-2">
        <div className="text-xs mb-1"> {playerName}</div>
        <div className="flex items-center gap-0.5">
          { cards.map((card, index) => (
            <Cards key={index} cardType={card} />
          ))}
        </div>
      </div>
    );
  };

  
export default PlayerCards;