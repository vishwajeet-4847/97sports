import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import ToggleArrowButton from './ToggleArrowButton';

const ListItem = ({ item, classname, isToggle, isIcon, onClick, isExpanded }) => {
  
  
  return (
    <div 
      className="flex justify-between items-center px-4 py-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100" 
      onClick={onClick} 
    >
      <span className={`${classname}`}>{item}</span>
      
      {!isToggle && !isIcon && 
        <FaChevronRight className="text-gray-600 border border-gray" />
      }
      
      {isToggle && 
        <ToggleArrowButton isDown={isExpanded} /> 
      }
    </div>
  );
};

export default ListItem;