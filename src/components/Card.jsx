import React from 'react'

const Card = ({card}) => {
  return (
    <div className='flex flex-col gap-4 px-2 py-3 items-center text-center w-fit text-white
    inset-0 bg-white bg-opacity-10 backdrop-blur-md
    shadow-4xl rounded-2xl cursor-pointer'>
        <div className='text-2xl handlee-regular'>
            {card.heading}
        </div>
        <div className='text-[12px]'>
            {card.description}
        </div>
        <button className={ `text-white px-6 py-2 rounded-full hover:opacity-75 transition-all duration-200
             ease-in ${card.buttonText}`}>
            GET STARTED
        </button>
    </div>
  )
}

export default Card