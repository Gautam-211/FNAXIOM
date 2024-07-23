import React from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {loggedIn} = useSelector((state) => state.auth)

  
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center w-11/12">

        <div className="text-white font-bold text-4xl">
          <Link to={"/"}>
           FNAXIOM
          </Link>
        </div>

        <div className="space-x-6 flex items-center justify-between">
          <Link to={"/"} className="text-white hover:scale-95 transition-all duration-200 ease-in">HOME</Link>
          <a href="#about" className="text-white hover:scale-95 transition-all duration-200 ease-in">ABOUT</a> 
          <a href="#to" className="text-white hover:scale-95 transition-all duration-200 ease-in">TO</a> 
        </div>

        <div>
            <a href="#assessment" className="text-white text-3xl handlee-regular">FULL INTERNSHIP ASSESSMENT</a>
        </div>

        <div className='flex items-center gap-6'>
            <Link to={`${loggedIn?"/":"/login"}`} className="text-white">
                <div className='rounded-full px-5 py-2 bg-gradient-to-r from-blue-500 to-red-500 hover:scale-90 transition-all duration-200 ease-in'>
                    {`${loggedIn?"Welcome":"Log In"}`}
                </div>
            </Link>
            <Link to={`${loggedIn?"/":"/signup"}`} className="text-white">
                <div className='rounded-full px-3 py-2  flex gap-2 items-center bg-gradient-to-r from-blue-500 to-red-500 text-[14px]
                hover:scale-90 transition-all duration-200 ease-in'>
                    {`${loggedIn?"Hello":"SignUp"}`}
                    <FaArrowRight/>
                </div>
            </Link>
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
