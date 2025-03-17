import React, { useContext, useState } from "react";

import ImageCarousel from "../components/ImageCarosouel";
import HorizontalScrollList from "../components/HorizontalScrollbar/HorizontalScrollBarList";

import Footer from "../components/Footer";
import SearchBar from "../components/search/SearchBar";

import CasinoBox from "../components/casino/CasinoBox";
import { SportsContext } from "../services/allsports/sports.context";
import { CasinoContext } from "../services/casino/casino.context";
import MatchList from "../components/matchlist/MatchList2";
import { AuthContext } from "../services/auth/auth.context";
import TextTicker from "../components/TextTicker";

export const Homescreen = () => {
  const [searchBar, setSearchBar] = useState(false);

 

  const [currentSportEid, setCurrentSportEid] = useState(4);
  const { isAuthenticated } = useContext(AuthContext);

  const isCountryHeader = currentSportEid === 10 || currentSportEid === 65;

  const { allSports, getMatchListById, matchList } = useContext(SportsContext);

  return (
    <div>
      {searchBar && <SearchBar setSearchBar={setSearchBar} />}
      {isAuthenticated && <TextTicker />}
      <ImageCarousel
        images={[
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
        ]}
      />
      <HorizontalScrollList
        setSearchBar={setSearchBar}
        showSearchIcon={true}
        showAviator={true}
        menuItem={allSports}
        onMenuItemClick={getMatchListById}
        setCurrentSportEid={setCurrentSportEid} //
      />

      <MatchList matchList={matchList} isCountryHeader={isCountryHeader} />

      <CasinoBox />
      <Footer />
    </div>
  );
};
