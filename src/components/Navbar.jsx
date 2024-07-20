import React from 'react';
import { FaArrowRight } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center w-11/12">

        <div className="text-white font-bold text-4xl">
          FNAXIOM
        </div>

        <div className="space-x-6 flex items-center justify-between">
          <a href="#home" className="text-white">HOME</a>
          <a href="#about" className="text-white">ABOUT</a> 
          <a href="#to" className="text-white">TO</a> 
        </div>

        <div>
            <a href="#assessment" className="text-white text-3xl handlee-regular">FULL INTERNSHIP ASSESSMENT</a>
        </div>

        <div className='flex items-center gap-6'>
            <a href="#horses" className="text-white">
                <div className='button_border px-3 py-2 rounded-full'>
                    Hello
                </div>
            </a>
            <a href="#horses" className="text-white">
                <div className='button_border px-3 py-2 rounded-full flex gap-2 items-center text-[14px]'>
                    Welcome
                    <FaArrowRight/>
                </div>
            </a>
        </div>
        
        <div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:opacity-75 transition-all duration-200 ease-in">
            GET STARTED
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
