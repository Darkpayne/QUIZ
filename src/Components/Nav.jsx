import React from 'react'
import {ImPacman} from 'react-icons/im'
import Button from './Button';
import { useState } from 'react';


function Nav() {
    let Links = [
        {name:"HOME",link:"/"},
        {name:"COMPUTER",link:"/computer"},
        {name:"ABOUT",link:"/about"},
        {name:"CONTACT",link:"/contact"},
      
    ];
    const [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px10 px-7'>
            <div className='font-bold flex text-2xl cursor-pointer items-center font-[Poppins] text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                    <ImPacman/>
                </span>
                Joshua
            </div>
            <div onClick={()=>{setOpen(!open)}} className="text-3xl absolute right-8 top-6 cursor-pointer  md:hidden ">
                <ion-icon name={ open ? 'close':'menu'} ></ion-icon>
            </div>
            
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100': 'top-[-490px] opacity-0'} md:opacity-100 `}>
              {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <a href={link.link} className="text-gray-800 hover:text-blue-600 duration-500">{link.name}</a>
                </li>

                ))
              }
              <Button>
                  Get started
              </Button>
            </ul>
        </div>
    </div>
  )
}

export default Nav