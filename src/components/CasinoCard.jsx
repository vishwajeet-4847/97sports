import React from "react";

const CasinoCard = ({ imageSrc, title }) => {
    return (
        <div className="casinoicons flex flex-col items-center cursor-pointer bg-gradient-to-b from-[#f72424] to-[#bb1c00] shadow-lg rounded-md ">
            <a className="block">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                />
                <div className="casino-bottom mt-2 text-center text-black font-semibold  py-2 px-4 rounded-md bg-gradient-to-b from-[#f72424] to-[#bb1c00] hover:opacity-90">
                    {title}
                </div>
            </a>
        </div>
    );
};

export default CasinoCard;
