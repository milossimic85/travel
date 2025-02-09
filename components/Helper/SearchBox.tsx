import React from 'react'
import { FaCalendar, FaCalendarWeek, FaCheck, FaMap, FaMapMarkedAlt, FaUserCircle } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className="bg-white p-8 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
     w-[95%] sm:w-[80%] gap-8  mt-4 sm:mt-12 items-center justify-center">
        <div className='flex items-center space-x-4'>
            <FaMap className="w-6 h-6 text-blue-600"/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                <p className='whitespace-nowrap'>Where are you going?</p>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                <input type='date' className='outline-none border-none' ></input>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                <input type='date' className='outline-none border-none' ></input>
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <FaUserGroup className='w-6 h-6 text-blue-600'/>
            <div>
                <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                <p>1 guest 1 room</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBox
