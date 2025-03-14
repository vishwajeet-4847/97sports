import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const ListItem = ({item , classname}) => {
  return (
    <div  className="flex justify-between items-center px-4 py-3 border-b border-gray-300 cursor-pointer hover:bg-gray-100">
                <span className={`${classname}`}>{item}</span>
                <FaChevronRight className="text-gray-600" />
              </div>

  )
}

export default ListItem