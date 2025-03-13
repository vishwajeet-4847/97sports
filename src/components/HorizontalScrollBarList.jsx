import React, {  useRef, useState } from "react";

import aviator from "/aviator.png";
import search from "/search.png";

const HorizontalScrollList = ({ setSearchBar , menuItem = [] , showSearchIcon , showAviator }) => {

  const [ activeTab , setActiveTab ] = useState("Cricket");

  
 
  
  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  // Start Dragging
  const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  // Stop Dragging
  const stopDragging = () => {
    isDragging = false;
  };

  // Drag Move
  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Scroll to clicked item
  



  // Scroll to item and shift the view
  const scrollToElement = (index) => {
    const container = scrollRef.current;
    const item = container.children[index];

    if (!item) return;

    const itemLeft = item.offsetLeft;
    const containerWidth = container.offsetWidth;

   
    container.scrollTo({
      left: itemLeft,
      behavior: "smooth",
    });
  };
  
  
  return (
    <div className="w-full bg-gradient-to-b from-[#f60105] to-[#801011] relative select-none">
      <div
        className={`flex cursor-default overflow-x-auto items-center whitespace-nowrap flex-nowrap custom-scrollbar  w-full gap-3 ${showSearchIcon && "pr-[62px]"} `}
        ref={scrollRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDragging}
      >
        {/* aviator div  */}
        {
          showAviator && <div className=" h-8 min-w-fit whitespace-nowrap rounded-tr-lg rounded-tl-lg ml-2 bg-black p-2 mt-2  ">
          <div className="flex gap-1 h-full text-base font-bold items-center scale-animation">
            <img src={aviator} className="h-6" alt="" />
            <p>Vimaan</p>
          </div>
        </div>
        }
        

        {/* menu items */}
        {
          menuItem.map((item, index) => (
            <div
            onClick={() => {
              scrollToElement(index);
              setActiveTab(item.name);
            }}
            key={index}
            className={` h-6 min-w-fit whitespace-nowrap  flex items-center rounded-md px-1.5 py-4 ${
              activeTab === item.name ? "text-white bg-gradient-to-b from-[#f60105] to-[#9c181a] " : "text-black "
            } font-bold`}
          >{
            item.icon && <img
            className={` ${
              activeTab === item.name ? "" : "invert grayscale "
            } h-6 bg-blend-color-burn`}
            src={item.icon}
            alt={item.name}
          />
          }
            
            <p> {item.name}</p>
          </div>
          ))
        }
        
      
        {/* search bar  */}
        {showSearchIcon && <div className=" h-full bg-gradient-to-b from-[#610b0c] to-[#801011]  absolute right-0 flex items-center justify-center p-4 cursor-pointer w-[60px]">
          <img
            src={search}
            onClick={() => setSearchBar(true)}
            className=" h-5"
            alt=""
          />
        </div>}
        
       
    

      </div>
    </div>
  );
};

export default HorizontalScrollList;
