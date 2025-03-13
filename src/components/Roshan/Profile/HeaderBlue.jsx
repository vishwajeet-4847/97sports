import { FaCog } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { GiSoccerBall } from 'react-icons/gi';
import { BsCoin } from "react-icons/bs";

const HeaderBlue = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-3 flex justify-between items-center shadow-md">
      {/* Left Side - Logo and Title */}
      <div className="flex items-center space-x-2 shadow">
        <div className="bg-blue-700 p-2 rounded">
          <BsCoin className="text-white text-lg" />
        </div>
        <h1 className="text-lg font-bold">Bets</h1>
      </div>
      
      {/* Middle - PTI and Exposure */}
      <div className="text-sm text-center">
        <p>Main PTI <span className="font-bold">0.74</span></p>
        <p>Exposure <span className="text-red-500 font-bold">(0.00)</span></p>
      </div>
      
      {/* Right Side - Refresh and Settings */}
      <div className="flex space-x-2">
        <button className="bg-blue-700 p-2 rounded shadow">
          <IoMdRefresh className="text-white text-lg" />
        </button>
        <button className="bg-blue-700 p-2 rounded shadow">
          <FaCog className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default HeaderBlue;
