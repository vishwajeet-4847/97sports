import React, { useState } from "react";
import AgeVerificationModal from "../modals/AgeVerificationModal";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showAgeModal, setShowAgeModal] = useState(true);
    const handleConfirmAge = () => {
        setShowAgeModal(false);
      };

    return (
        <header className="flex items-center justify-between p-4 shadow-md bg-gradient-to-b from-[#315195] to-[#14213D]">
            {/* Left Side - Logo */}
            <div className="flex items-center">
                <img 
                    src="https://97sports.in/api/users/images/theme-1709707142654-97sports.png" 
                    alt="Site Logo" 
                    className="h-10 w-auto cursor-pointer"
                />
            </div>
            <div className="flex items-center space-x-2 w-2/5 justify-end relative">
                <div className="hidden md:flex items-center justify-end w-full">
                    {showSearch &&    <input 
                        type="text" 
                        placeholder="Search..." 
                        className=" absolute left-[-50%] block w-[150px] mt-[9px] h-[25px] px-3.5 py-1.5 border border-[#dee2e6] rounded-md text-sm font-normal leading-6 text-[#212529] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />}
                   

                    <div className="login-form flex gap-1.5 item-center w-full justify-end mx-1">
                    <button onClick={() => setShowSearch(!showSearch)} className="text-white text-center">
                        <i className="fas fa-search-plus text-xl"></i>
                        </button>
                        <input 
                        type="text" 
                        placeholder="Username" 
                        className="block w-[150px] mt-[9px] h-[25px] px-3.5 py-1.5 border border-[#dee2e6] rounded-md text-sm font-normal leading-6 text-[#212529] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        maxLength="13" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="block w-[150px] mt-[9px] h-[25px] px-3.5 py-1.5 border border-[#dee2e6] rounded-md text-sm font-normal leading-6 text-[#212529] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    </div>
                   
                </div>
                <button
                    onClick={() => setShowAgeModal(true)}
                 className="text-white  px-1 py-2 rounded-md transition bg-gradient-to-b from-[#f72424] to-[#bb1c00] hover:opacity-90 ">
                        Login
                        <i className="fas fa-sign-in text-md"></i>
                    </button>


            </div>
            
              

<AgeVerificationModal 
        isOpen={showAgeModal}
        onClose={() => setShowAgeModal(false)}
        onConfirm={handleConfirmAge}
      />
        </header>
    );
};

export default Header;
