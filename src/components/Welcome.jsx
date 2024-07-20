import React from 'react'

const Welcome = () => {
  return (
    <div className='px-4 py-7 rounded-3xl flex flex-col gap-4 items-center inset-0 bg-white bg-opacity-5 backdrop-blur-md
    shadow-2xl cursor-pointer' >
            
            <div className='text-3xl font-semibold text-white text-center'>
                Welcome to <br /><span className='text-4xl font-extrabold'>FNAXIOM</span><br /> FULL STACK <br />INTERNSHIP
            </div>

            <button className='bg-gradient-to-r from-blue-500 to-red-500 text-white w-full px-6 py-2 rounded-full hover:opacity-75 transition-all
             duration-200 ease-in text-[12px] font-semibold'>Lorem ipsum dolor sit amet.</button>

            <button className='bg-red-600 text-white px-6 py-2 rounded-full hover:opacity-75 transition-all
             duration-200 ease-in text-3xl font-semibold'>
                GET STARTED
            </button>

    </div>
  )
}

export default Welcome