import React from 'react'
import coffee_bg from '../assets/coffee-bg.webp'

const Hero = () => {
  return (
    <div className='relative h-127 w-full'>
      <img
        src={coffee_bg}
        className='absolute  w-full h-127 object-cover brightness-70 top-0 transform -scale-y-100 '
        alt="bg"
      />
      
      <div className='absolute inset-0 h-127 flex flex-col justify-center items-center '>
        <p className='text-center font-[ovo] text-white text-[3.5rem] mb-6 md:text-7xl px-10'>Welcome to Hampstead</p>
        <button className='bg-white w-38 rounded-4xl h-12 font-[ovo] text-[20px] md:w-50 md:h-14 hover:bg-gray-300'>Shop Now</button>
      </div>
    
    </div>
  )
}

export default Hero
