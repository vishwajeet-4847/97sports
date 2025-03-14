import React, { useContext, useState } from "react";

import ImageCarousel from "../components/ImageCarosouel";
import HorizontalScrollList from "../components/HorizontalScrollbar/HorizontalScrollBarList";

import Footer from "../components/Footer";
import SearchBar from "../components/search/SearchBar";

import DataTable from "../components/DataTable";
import dummyMarketData from "../details/dummymarket";
import CasinoBox from "../components/casino/CasinoBox";
import { SportsContext } from "../services/allsports/sports.context";
import { CasinoContext } from "../services/casino/casino.context";


  const secondMenu =
    [
      { id: "sportsBar0", name: "ALL" },
      { id: "sportsBar1", name: "OUR CASINO" },
      { id: "sportsBar2", name: "OUR VIRTUAL" },
      { id: "sportsBar3", name: "EVOLUTION" },
      { id: "sportsBar4", name: "EZUGI" },
      { id: "sportsBar5", name: "TVBET" },
      { id: "sportsBar6", name: "BETGAME" },
      { id: "sportsBar7", name: "PLATINGAMES" },
    ]
  
export const Homescreen = () => {
  const [searchBar, setSearchBar] = useState(false);
  const { allCasinoGames } = useContext(CasinoContext);
  
  const { allSports } = useContext(SportsContext);
  console.log(allCasinoGames);
  
 
  
  
  
  return (
    <div>
     {searchBar && <SearchBar setSearchBar={setSearchBar} /> }
      
      <ImageCarousel
        images={[
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
        ]}
      />
      <HorizontalScrollList setSearchBar={setSearchBar} showSearchIcon={true} showAviator={true} menuItem={allSports}/>
        <DataTable  marketData={dummyMarketData}/>
      <HorizontalScrollList menuItem={secondMenu}/>

      <CasinoBox />

      <Footer />
     
    </div>
  );
};
