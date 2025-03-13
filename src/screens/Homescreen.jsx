import React, { useState } from "react";
import Header from "../components/header/header";
import ImageCarousel from "../components/ImageCarosouel";
import HorizontalScrollList from "../components/HorizontalScrollBarList";
import CasinoCard from "../components/CasinoCard";
import Navigation from "../components/BottomNavigationBar";
import Section from "../components/Section";
import GridContainer from "../components/GridContainer";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import cricket from "/cricket.png";
import DataTable from "../components/DataTable";
import dummyMarketData from "../details/dummymarket";

const defaultMenu = [
    { name: "Cricket", icon: cricket },
    { name: "Football", icon: cricket },
    { name: "Basketball", icon: cricket },
    { name: "Tennis", icon: cricket },
    { name: "Baseball", icon: cricket },
    { name: "Hockey", icon: cricket },
    { name: "Golf", icon: cricket },
  ];

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
  
  return (
    <div>
     {searchBar && <SearchBar setSearchBar={setSearchBar} /> }
      
      <ImageCarousel
        images={[
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
          "https://97sports.in/api/users/images/slider-default-2025221103413148.jpg",
        ]}
      />
      <HorizontalScrollList setSearchBar={setSearchBar} showSearchIcon={true} showAviator={true} menuItem={defaultMenu}/>
        <DataTable  marketData={dummyMarketData}/>
      <HorizontalScrollList menuItem={secondMenu}/>

      <Section backgroundImage="https://97sports.in/casinobg.4aafd0d08a047031.png">
        <GridContainer>
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
          <CasinoCard
            imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png"
            title="POINT TEEN PATTI"
          />
        </GridContainer>
      </Section>

      <Footer />
     
    </div>
  );
};
