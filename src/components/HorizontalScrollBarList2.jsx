import React ,{useRef} from "react";

const HorizontalScrollList = ({ items }) => {

   // Ref to track the scroll container
   const scrollRef = useRef(null);
   let isDragging = false;
   let startX;
   let scrollLeft;
 
   const startDragging = (e) => {
     isDragging = true;
     startX = e.pageX - scrollRef.current.offsetLeft;
     scrollLeft = scrollRef.current.scrollLeft;
   };
 
   const stopDragging = () => {
     isDragging = false;
   };
 
   const onDragging = (e) => {
     if (!isDragging) return;
     e.preventDefault();
     const x = e.pageX - scrollRef.current.offsetLeft;
     const walk = (x - startX) * 2; // Adjust speed
     scrollRef.current.scrollLeft = scrollLeft - walk;
   };
 
  const menuItems = [
    "ALL",
    "OUR CASINO",
    "OUR VIRTUAL",
    "EVOLUTION",
    "EZUGI",
    "TVBET",
    "BETGAME",
    "PLATINGAMES",
  ];
  return (
    <div className="relative w-full bg-gradient-to-b from-[#f60105] to-[#801011] p-2">
      <ul
        ref={scrollRef}
        className="relative flex space-x-4 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full custom-scrollbar cursor-pointer"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDragging}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-600 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default HorizontalScrollList;