import React from 'react';
import { FaLock } from 'react-icons/fa';

const TeenPatiRecord = ({ detail }) => {
    console.log(detail);
    
  return (
    <div className="w-full max-w-4xl overflow-hidden mb-3 relative">
        {
            detail.suspendedAll &&   <div className="absolute w-full h-full border border-red-500 flex items-center justify-center z-10  inset-0 bg-black/50">
            <span className='text-red-500 font-extrabold text-xl'>SUSPENDED</span>
        </div>
        }
       
      {/* Header with game title and limits */}
      <div className="bg-blue-900 text-white p-2 flex justify-between items-center w-full rounded-md shadow-md">
        <div className="text-sm sm:text-lg font-semibold">{detail.subtype.toUpperCase()}</div>
        <div className="text-xs sm:text-base">Min/Max: {detail.min} - {detail.max}</div>
      </div>

      {/* Players Section */}
      <div className="bg-blue-200 flex flex-col p-2 rounded-md shadow-md">
        {detail.playersInfo.map((individualInfo, index) => (
          <div key={index} className="flex items-center bg-blue-500 shadow-md py-2 px-2 w-full rounded-md mb-1">
            {/* Player Name */}
            <div className="w-2/5 flex items-center">
              <span className="text-white text-xs sm:text-sm font-semibold px-2 whitespace-normal break-words">
                {individualInfo.nat}
              </span>
            </div>

            {/* Back Price */}
            <div className="w-1/5 bg-pink-500 rounded-md relative flex flex-col items-center p-2 shadow-md">
              {individualInfo.b === 0 && individualInfo.bs === 0 && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-md">
                  <FaLock className="text-white text-lg" />
                </div>
              )}
              <span className="text-white font-bold text-xs sm:text-sm">{individualInfo.b}</span>
              <span className="text-white text-[10px] sm:text-xs">{individualInfo.bs}</span>
            </div>

            {/* Lay Price */}
            <div className="w-1/5 bg-blue-600 rounded-md relative flex flex-col items-center p-2 shadow-md">
              {individualInfo.l === 0 && individualInfo.ls === 0 && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-md">
                  <FaLock className="text-white text-lg" />
                </div>
              )}
              <span className="text-white font-bold text-xs sm:text-sm">{individualInfo.l}</span>
              <span className="text-white text-[10px] sm:text-xs">{individualInfo.ls}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeenPatiRecord;
