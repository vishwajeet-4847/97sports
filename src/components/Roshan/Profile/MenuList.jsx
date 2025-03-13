import { FaExchangeAlt } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

const MenuList = () => {
    const menuItems = [
      "My Profile",
      "Multi Markets",
      "Rolling Commission",
      "Account Statement",
      "Bets History",
      "Profit & Loss",
      "Password History",
      "Activity Log",
    ];
  
    return (
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center px-4 py-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100">
            <span className="text-blue-700 font-semibold">{item}</span>
            <FaChevronRight className="text-gray-600" />
          </div>
        //   <MenuItem key={index} title={item} />
        ))}
        <button className="w-full bg-red-600 text-white py-2 text-lg font-bold flex items-center justify-center space-x-2 shadow-md hover:bg-red-700">
      <span>LOGOUT</span>
      <FaSignOutAlt />
    </button>
      </div>
    );
  };

  export default MenuList;