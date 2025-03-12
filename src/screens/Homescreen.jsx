import React from 'react'
import Header from '../components/header/header'

import ImageCarousel from '../components/ImageCarosouel'
import HorizontalScrollList from '../components/HorizontalScrollBarList'
import CasinoCard from '../components/CasinoCard'
import Navigation from '../components/BottomNavigationBar'
import Section from '../components/Section'
import GridContainer from '../components/GridContainer'
import Footer from '../components/Footer'

export const Homescreen = () => {
  return (
    <div className='pb-[14vw]'>
        <Header />

        <ImageCarousel images={["https://97sports.in/api/users/images/slider-default-2025221103413148.jpg","https://97sports.in/api/users/images/slider-default-2025221103413148.jpg"]} />
        <HorizontalScrollList items={["cricket" ,"volleybol"]} />
       
<Section backgroundImage="https://97sports.in/casinobg.4aafd0d08a047031.png">
<GridContainer>

{
  [1,2,3,4,5,6,7,8,9,10 , 11, 12, 13, 14,15, 20  ].map((item,index)=>(
    <CasinoCard key={index}
    imageSrc="https://97sports.in/api/users/images/Point Teen Patti-min.png" 
    title="POINT TEEN PATTI" 
/>
  ))
}
</GridContainer>

</Section>

<Footer />
<Navigation/>
    </div>
  )
}
