

import { MdOutlineMenu } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <header>
        <div className='bg-[#f6f8ea] flex w-full h-11 p-2 font-[Quicksand]'>
          <div className="invisible md:visible">
            <ul className="flex items-center pl-3 gap-2 ">
              <FaFacebookF className="text-2xl" />
              <FaInstagram className="text-2xl"/>
              <FaTwitter className="text-2xl"/>
            </ul>
            </div>
            <div className="text-center flex justify-center flex-1">
            <p className="mr-6 text-center font-[Quicksand]">ORDER BY MIDDAY FOR NEXT DAY DISPATCH OR COLLECTION</p>
            </div>
        </div>
        <nav className='bg-[#212121] h-16 md:h-24  '>
            <div className='flex justify-between  items-center p-4 md:absolute md:top-[57px]'>
                <MdOutlineMenu className='text-white text-3xl md:invisible' />
                <img src={logo} alt="" height={90} width={300}/>
                <LuShoppingCart className='text-white text-3xl md:invisible' />

            </div>
                <div className="flex gap-2 invisible absolute right-8 top-[70px]  md:visible">
                  <button className="h-10 flex hover:bg-amber-700  hover:text-black justify-center  w-30 gap-2 items-center  text-white rounded-3xl border-2"><VscAccount  className="text-white"/>Account</button>
                  <button className="h-10 flex justify-center hover:bg-amber-700  w-30 gap-2 items-center text-black rounded-3xl border-2 bg-white"><LuShoppingCart />$0.00(0)</button>
                </div>

        </nav>
        <hr className="text-[rgb(56,55,55)]"/>

        <div className="bg-[#212121] h-18 hidden md:block font-[Quicksand]">
            <ul className="flex text-white justify-around text-[18px] p-4 mx-3">
              <li><a  className='flex justify-center items-center gap-1' href="#">About Us <IoIosArrowDown /></a></li>
              <li><a className='flex justify-center items-center gap-1' href="#">Click & Collect <IoIosArrowDown /></a></li>
              <li><a href="#">Cakes & Catering</a></li>
              <li><a href="#">Merchandise</a></li>
              <li><a href="#">The Run Club</a></li>
              <li><a href="#">G&W Essentials</a></li>
              <li><a href="#">G&W Vouchers</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
