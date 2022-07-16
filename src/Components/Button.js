import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'


const Button = (props) => {
  return (
    <button className='bg-blue-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-blue-900 duration-500'>
        {props.children}
    </button>
  )
}

export default Button