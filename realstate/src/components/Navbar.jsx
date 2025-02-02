import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'
const Navbar = () => {
    const [showmobilemenu,setshowmobilemenu]=useState(false)
useEffect(()=>{
    if(showmobilemenu)
    {
        document.body.style.overflow ='hidden'
    }
    else{
         document.body.style.overflow ='auto'
    }
    return()=>{
        document.body.style.overflow ='auto'
    };
},[showmobilemenu]
)



  return (
    <div className='absolute top-0 left-0 w-full z-10'> 
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt=''/>
        
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a> 
            <a href="#about" className='cursor-pointer hover:text-gray-400'>about</a>
            <a href="#Projects" className='cursor-pointer hover: hover:text-gray-500'>Projects</a>
            
            <a href="#Testimonials" className='cursor-pointer  hover:text-gray-400'>
            Testimonials
          </a>
               </ul>
              
               <button className='hidden md:block bg-white px-8 py-2 rounded-full'>sin up</button>
      
      <img onClick={()=> setshowmobilemenu(true)}src={assets.menu_icon} className='md:hidden w-7' alt="" /></div>
      {/*--------mobile-menu---*/}
      <div className={`md:hidden ${showmobilemenu ?'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
<div className='flex justify-end p-6 cursor-pointer'>
    <img  onClick={()=> setshowmobilemenu(false)}src={assets.cross_icon} className='w-6' alt="" />
</div>
<ul className='flex flex-col items-centre gap-2 mt-5 px-5 text-lg font-medium'>
    <a onClick={()=> setshowmobilemenu(false)}href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
    <a onClick={()=> setshowmobilemenu(false)} href="#about" className='px-4 py-2 rounded-full inline-block'>about</a>
    <a  onClick={()=> setshowmobilemenu(false)}href="#project" className='px-4 py-2 rounded-full inline-block'>project</a>
    <a  onClick={()=> setshowmobilemenu(false)}href="#testimonials" className='px-4 py-2 rounded-full inline-block'>testimonials</a>

</ul>
      </div>
    </div>
  )
}

export default Navbar
