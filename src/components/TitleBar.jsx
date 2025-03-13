import React from 'react'

const TitleBar = ({title , background="bg-gradient-to-t from-[#14213D] to-[#315195]" , fontSize="" , lineHieght="" }) => {
  return (
    <div>
        <h3 className={`${background } ${fontSize} ${lineHieght} text-[#fff] text-[14px] leading-[30px] font-bold pl-[10px] m-0 text-center cursor-pointer`}>{title}</h3>
    </div>
  )
}

export default TitleBar