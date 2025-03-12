


import React from "react";
import { NavLink } from "react-router";
import  HomeIcon  from "./Home";

import SportsIcon  from "./Sports";
import  AccountIcon  from "./Account";
import InPlayIcon from "./InPlay";
import ChipRotate from "../assets/ChipRotate.gif";


const BottomNavigationBar = () => {
  const Menus = [
    { name: "Home", icon: <HomeIcon />},
    { name: "In-play", icon: <InPlayIcon /> },
    { name: "Sports", icon: <SportsIcon /> }, // Default Active (Middle One)
    { name: "Casino", icon: "img" },
    { name: "Account", icon: <AccountIcon /> },
  ];



  return (
    <div>
    <nav className="fixed bottom-0 lg:hidden w-full bg-gradient-to-b from-[#243a48] via-[#243a48] to-[#172732]text-white z-10">
  <ul className="flex p-0 mb-0 list-none text-white ">
    {
      Menus.map((menu, index) => (
        <li key={index} className="flex-1 text-center ">
         <NavLink
  to={`/${menu.name.toLowerCase()}`}
  className={({ isActive }) =>
    ` w-[20vw]  h-[13.33333vw] box-border overflow-hidden text-ellipsis whitespace-nowrap text-[3.2vw] text-center leading-[1.1] p-[1.86667vw_2.66667vw_0] block no-underline 
    ${isActive ? 'bg-gradient-to-t from-[#1f4258] via-[#2c546e] to-[#32617f]' : ''} 
    ${menu.name === "Sports" ? " z-[-20] before:content-[''] before:absolute before:top-[-4.26667vw] before:left-0 before:w-full before:h-[17.53333vw] before:bg-gradient-to-b before:from-[#243a48] before:via-[#243a48] before:to-[#172732] before:bg-no-repeat before:bg-[length:100%_100%] before:pointer-events-none before:-z-10 before:block before:[clip-path:polygon(99.973%_24.242%,100%_24.242%,100%_100%,0%_100%,0%_24.242%,.027%_24.242%,.027%_24.242%,.885%_23.318%,2.866%_21.335%,5.893%_18.565%,9.891%_15.281%,14.783%_11.756%,20.494%_8.261%,26.947%_5.068%,34.066%_2.451%,41.776%_.681%,50%_.03%,50%_12.152%,50%_.03%,50%_.03%,58.224%_.681%,65.934%_2.451%,73.053%_5.068%,79.506%_8.261%,85.217%_11.756%,90.109%_15.281%,94.107%_18.565%,97.134%_21.335%,99.115%_23.318%,99.973%_24.242%)]" : ""}`
  }
>
  <div className="box-border p-4">
    {menu.icon === "img" ? <img src={ChipRotate} alt="casino chip"  className="w-[7.70333vw] h-[7.33333vw]"/> : menu.icon}
  </div>

  <span className="block text-xs">{menu.name}</span>
</NavLink>
        </li>
      ))
    }
  </ul>

    </nav>
    </div>
  );
};

export default BottomNavigationBar;
