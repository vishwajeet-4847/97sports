import { FaExchangeAlt } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import ListItem from '../../ListItem';

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
      <div className="bg-white shadow-md rounded-md overflow-hidden mb-[50px] pb-[60px]">
        {menuItems.map((item, index) => (
           <ListItem item={item} key={index} classname={"text-blue-700 font-semibold"}/>
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