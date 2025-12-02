import shop from '../assets/shop.webp'
import window_img from '../assets/window.webp'
import coffeeShot from '../assets/coffeeShot.webp'
import product from '../assets/product.webp'
import tea from '../assets/tea.webp'
import img2 from '../assets/day.webp'
import img3 from '../assets/food.webp'
import img1 from '../assets/sandwich.webp'
import loyalty from '../assets/loyalty.webp'
import icon_plastic from '../assets/icon-plastic.avif'
import icon_location from '../assets/icon-location.avif'
import icon_local from '../assets/icon-local.webp'
import icon_dog from '../assets/icon-dog.avif'
import square from '../assets/square.avif'
import vouchers from '../assets/vouchers.webp'
import home1 from '../assets/HomePhoto2.webp'
import home2 from '../assets/HomePhoto3.webp'
import cake from '../assets/cake.webp'
import hotChocolate from '../assets/hot-chocolate.webp'
import baked from '../assets/baked-goods.webp'
import eggs from '../assets/eggs-sourdough.webp'
import { MdBakeryDining } from 'react-icons/md'




const Collect = () => {
  return (
    <div className='font-[Quicksand,sans-serif]'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-3xl font-extralight'>G&W Collect</h1>
        <p className='my-2 text-[16px] mb-6 md:text-[20px] md:text-[#212121] md:font-sans'>We will have your order ready for you.</p>
      </div>
      <div className='md:grid md:justify-center md:place-items-center md:grid-cols-2 md:mx-6'>
        <div className='border-3 m-4 rounded-2xl border-black text-center md:w-155'>
            <img src={shop} className='w-full' alt="" />
            <div className='bg-[#212121] text-white'>
            <h1 className='text-4xl font-[quicksand] p-4'>Coffee Shop</h1>
            <p className='font-sand pb-4'>Click and collect from our menu for now or the future. Enjoy coffee, cakes, eggs, salads, toasties, granola and juices to go.</p>
            <button className='bg-white text-black w-50 h-12 rounded-3xl mb-4'>Order from G&W</button>
            </div>
        </div>

        <div className='border-3 m-4 rounded-2xl border-black text-center md:w-155'>
            <img src={window_img} className='w-full' alt="" />
            <div className='bg-[#212121] text-white'>
            <h1 className='text-4xl font-[quicksand] p-4'>At the Window</h1>
            <p className='font-sand pb-4 px-6'>Click and collect your delicious hot coffee, protein shakes, salads, borekas, cinnamon buns, pastries, cookies and sandwiches.</p>
            <button className='bg-white text-black w-50 h-12 rounded-3xl mb-4'>Order from Window</button>
            </div>
        </div>
      </div>

      {/* G&W Collections */}

      <div>
        <div className='text-center font-[Quicksand,sans-serif]'>
            <h1 className='text-2xl font-extralight mt-16'>G&W Collections</h1>
            <p className='my-2 text-[16px] px-6 mb-6 md:text-[20px] md:text-[#212121] md:font-sans'>Since 2012, our cakes have become cult favourites, baked fresh for your pre order with 48-hour notice.</p>
        </div>
        <div className='m-4 grid grid-rows-1 place-items-center md:max-w-full'>
            <div className='flex gap-2'>
              <div className='border-2 border-black w-1/3 rounded-2xl text-center overflow-hidden'>
                <img src={coffeeShot}  className='object-cover rounded-t-2xl hover:scale-110 transition-transform duration-300 w-full ' alt="" />
                <p className='my-4'>Blends</p>
                </div>

                <div className='border-2 border-black w-1/3 rounded-2xl text-center overflow-hidden group'>
                <img src={product}  className='object-scale-down rounded-t-2xl group-hover:scale-110 transition-transform duration-300 w-full ' alt="" />
                <p className='my-4'>White Label by G&W</p>
                </div>

                <div className='border-2 border-black w-1/3 rounded-2xl text-center overflow-hidden group'>
                <img src={tea}  className='object-scale-down rounded-t-2xl group-hover:scale-110 transition-transform duration-300 w-full  ' alt="" />
                <p className='my-4 '>Spreads</p>
                </div>
            </div>
            <button className=' border-1 items-center my-6  border-black h-12 w-50 rounded-3xl'>View all Collections</button>
        </div>
      </div>

      {/* images */}
     
      <div className='w-full px-4 md:gap-2 md:justify-center md:items-center md:flex md:w-full md:px-8 '>
        <img className=' w-full border-3 my-2 rounded-2xl border-black  text-center ' src={img1} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center  ' src={img2} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center  'src={img3} alt="" />
      </div>

      {/* about g&W */}
    <div>
        <div className='text-center font-[Quicksand,sans-serif]'>
            <h1 className='text-2xl font-extralight mt-16 font-[ovo]'>About G&W</h1>
            <p className='my-2 text-[16px] px-6 mb-6 md:text-[20px] md:text-[#212121] md:font-sans'>A few extras that make us special.</p>
        </div>
        
        <div className='grid grid-cols-2 place-items-center md:grid-cols-3  md:place-items-center md:mx-30'>
          <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={icon_dog} alt="" />
            </div>
            <div className='text-center mx-2'>
              <h2 className='font-[ovo] my-2 text-2xl'>Dog Friendly</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>We love dogs and they are welcome inside at G&W. We know most dogs by name and the treats they like!</p>
            </div>
          </div>

           <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={icon_local} alt="" />
            </div>
            <div className='text-center mx-2 '>
              <h2 className='font-[ovo] my-2 text-2xl'>All Local</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>We take pride in sourcing ingredients from British farmers. Our eggs are from a family farm in Wales.</p>
            </div>
          </div>

           <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={loyalty} alt="" />
            </div>
            <div className='text-center mx-2'>
              <h2 className='font-[ovo] my-2 text-2xl'>More than Family</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>Enjoy a free coffee with every completed loyalty card. You can download our digital loyalty app.</p>
            </div>
          </div>

           <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={icon_plastic} alt="" />
            </div>
            <div className='text-center mx-2'>
              <h2 className='font-[ovo] my-2 text-2xl'>Completely Plastic Free</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>We use no plastic at G&W and all our packaging is either paper, wood or fully compostable</p>
            </div>
          </div>

           <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={icon_location} alt="" />
            </div>
            <div className='text-center mx-2'>
              <h2 className='font-[ovo] my-2 text-2xl'>Hampstead</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>We are very proud to be a part of the wonderful community. We support local events and charities.</p>
            </div>
          </div>

           <div className='w-50 text-center mb-8 md:w-[80%]'>
            <div className='flex justify-center items-center'>
            <img height={150} width={150} src={square} alt="" />
            </div>
            <div className='text-center mx-2'>
              <h2 className='font-[ovo] my-2 text-2xl'>Square Mile</h2>
              <p className='font-[Quicksand] text-[16px] text-[#494747]'>A multi award winning exceptional quality coffee roasting company based in London.</p>
            </div>
          </div>
        </div>
    </div>

      {/* more images */}

    <div>
      <div className='text-center font-sans'>
            <h1 className='text-2xl font-extralight mt-16 font-[ovo]'>Pets are Welcome</h1>
            <p className='my-2 text-[16px] px-6 mb-6 md:text-[20px] md:text-[#212121] '>We love your animals</p>
      </div>

       <div className='w-full px-4 md:gap-2 md:justify-center md:items-center md:flex  md:px-8  md:grid-cols-2'>
        <img className=' w-full border-3 my-2 rounded-2xl border-black  text-center md:w-120' src={home1} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center md:w-120 ' src={home2} alt="" />
       
      </div >
        <div className='md:relative mt-20'>
        <img className='mt-10 w-120 md:absolute md:z-10 md:right-0 md:h-80 md:w-80 md:mr-10' src={vouchers}  alt="" />
        <div className='bg-[#212121] text-white p-10 md:h-[380px] md:p-50'>
          <h1 className='text-4xl'>G&W Gift Vouchers</h1>
          <p className='pt-5'>Coffee is on you! Buy happiness for those you love with G&W Gift Vouchers.</p>
          <button className='border-1 mt-6 h-12 w-40 rounded-3xl flex justify-center items-center hover:bg-[#12331781] hover:border-none'>Order Now</button>
        </div>
        </div>
      </div>

      {/* more images */}


       <div className='w-full px-4 md:gap-3 md:justify-center md:items-center md:flex  md:px-8  md:grid-cols-4 mt-10 md:w-80 md:mx-130 '>
        <img className=' w-full border-3 my-2 rounded-2xl border-black  text-center md:w-100' src={eggs} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center md:w-100 ' src={baked} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center md:w-100 ' src={hotChocolate} alt="" />
        <img className='w-full border-3 my-2 rounded-2xl border-black text-center md:w-100 ' src={cake} alt="" />
       
      </div >
      
    </div>
  )
}

export default Collect
