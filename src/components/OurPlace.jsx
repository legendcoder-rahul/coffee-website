import React from 'react'
import our_place from '../assets/place.webp'

const OurPlace = () => {
  return (
    <div className='p-4'>
      <div className='text-center p-5 font-[Quicksand,sens sarif]  ' >
        <h1 className='text-[40px] mb-5 md:font-[Quicksand]'>Our Happy Place</h1>
        <p className='text-[16px] font-[16px] text-[#212121] md:px-45'>Ginger & White is a British cafe in Hampstead. We celebrate all the simple, yet best things in life - made by hand from scratch everyday. We serve dippy eggs, toasties, artisan coffee, banana chocolate chip cakes, turkey bacon, freshly squeezed orange juice and delicious homemade chunky peanut butter. Our biggest joy is to bring friends, family and the whole community together with ❤ in NW3.
        </p>
      </div>
      <div>
        <div className='md:flex md:p-4'>
            <img  className='mt-4 mb-4' src={our_place} alt="" />
            <div className='text-center p-8  md:text-[16px] md:pt-[100px] '>
            <p>GINGER & WHITE</p>
            <p>4A-5A PERRINS COURT, HAMPSTEAD, LONDON, NW3 1QS</p>
            <p className='my-4'>We dont take bookings but we have tables available inside and outside for walk in's.</p>
            <p className='font-semibold mt-8'>OPENING HOURS</p>
            <p>Monday - Friday</p>
            <p>7.30am - 5.30pm</p>
            <p className='mt-6' >Saturday</p>
            <p>7.30am - 6pm</p>
            <p className='mt-6'>Sunday</p>
            <p>8am - 6pm</p>
            <div className='flex justify-center items-center'>
            <button className='bg-[#212121] text-white w-38 h-12 rounded-3xl my-6 md:text-[17px] '>Get Directions</button>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default OurPlace
