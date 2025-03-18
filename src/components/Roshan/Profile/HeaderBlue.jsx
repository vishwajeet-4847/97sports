import { FaCog } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { GiSoccerBall } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../services/auth/auth.context";

const HeaderBlue = () => {
  const { user } = useContext(AuthContext);
  const [balanceData, setBalanceData] = useState("");

  const fetchUserBalance = async () => {
    try {
      const response = await axios.post(
        "https://admin.titan97.live/Apicall/getallbal",
        { userId: user?.user_id }
      );
      setBalanceData(response.data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchUserBalance();
    const interval = setInterval(() => {
      fetchUserBalance();
    }, 120000);

    return () => clearInterval(interval);
  }, []);

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
        <p>
          Main PTI <span className="font-bold">{balanceData?.bet_balance}</span>
        </p>
        <p>
          Exposure{" "}
          <span className="text-red-500 font-bold">
            ({balanceData?.balance})
          </span>
        </p>
      </div>

      {/* Right Side - Refresh and Settings */}
      <div className="flex space-x-2">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-700 p-2 rounded shadow"
        >
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
