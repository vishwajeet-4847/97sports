import React from 'react';


// light blue button table
const TeenPatiRecord = ({title , min , max , ls , l , playerA , playerB}) => {
  return (
    <div className="w-full max-w-4xl border border-gray-800 overflow-hidden">
      {/* Header with game title and limits */}
      <div className="bg-blue-900 text-white p-2 flex justify-between items-center">
        <div className="font-bold">{title}</div>
        <div className="text-sm">Min/Max: {min} - {max}</div>
      </div>
      
      {/* Players section */}
      <div className="bg-blue-200 flex">
        {/* Player A */}
        <div className="flex-1 p-3 border-r border-blue-300">
          <div className="text-center font-bold text-blue-900 mb-2">{playerA}</div>
          <div className="mx-auto bg-blue-400 rounded-lg p-3 text-center w-32 shadow-md">
            <div className="text-2xl font-bold">{l}</div>
            <div className="text-sm">{ls}</div>
          </div>
        </div>
        
        {/* Player B */}
        <div className="flex-1 p-3">
          <div className="text-center font-bold text-blue-900 mb-2">{playerB}</div>
          <div className="mx-auto bg-blue-400 rounded-lg p-3 text-center w-32 shadow-md">
            <div className="text-2xl font-bold">{l}</div>
            <div className="text-sm">{ls}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenPatiRecord;