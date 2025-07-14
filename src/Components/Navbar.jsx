import React from 'react';
import MemojiFace from '../assets/images/memoji-face.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-between p-1 px-2 bg-[#3F2E3E] rounded-[10.83px] w-[312px] h-auto">
            <li><img className='w-[52px] h-[52px]' src={MemojiFace} alt="Memoji Face" /></li>
            <li className="text-[#A78295] uppercase font-Inter-Medium text-[12px] cursor-pointer hover:text-[#927182]">Works</li>
            <li className="text-[#A78295] uppercase font-Inter-Medium text-[12px] cursor-pointer hover:text-[#927182]">CV</li>
            <li>
            <button
                type="button"
                className="flex items-center justify-center w-[78px] h-[35px] bg-[#A78295] rounded-[6.5px] text-[#331D2C] text-[14px] font-Inter-Medium hover:bg-[#927182] transition cursor-pointer"
            >
                Chat
            </button>
            </li>
        </ul>
    </nav>
  );
}