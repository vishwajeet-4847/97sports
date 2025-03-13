import React from 'react'

const ButtonGroup = () => {
  return (
<div className="w-full md:w-fit p-4">
  <div className="flex w-full md:w-fit border border-[#3B5160] md:rounded-md overflow-hidden">
    <button className="bg-[#3B5160] text-white font-bold px-4 py-1 text-[13px] leading-[27px] border-r border-[#3B5160] flex-1 md:flex-none">
      In-Play
    </button>
    <button className="bg-[#fff] text-[#3B5160] font-bold px-4 py-1 text-[13px] leading-[27px] border-r border-[#3B5160] flex-1 md:flex-none">
      Today
    </button>
    <button className="bg-[#fff] text-[#3B5160] font-bold px-4 py-1 text-[13px] leading-[27px] flex-1 md:flex-none">
      Tomorrow
    </button>
  </div>
</div>

  


  )
}

export default ButtonGroup