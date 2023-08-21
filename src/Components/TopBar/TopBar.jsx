import React from 'react' 
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { AiOutlineInstagram } from 'react-icons/ai'
export default function TopBar() {
  return (
    
    <div  className='bg-[top] bg-fullSize bg-no-repeat bg-[#16171b] bg-[url(/Images/hero-bg.jpg)] border-b-2 border-red-600 border-solid sm-x2:pb-20'>
      <section className='px-36 relative z-20  sm-x2:overflow-hidden  pb-[70px] lg:px-10 pt-28 md:pt-10'>

        <img src="/Images/photo_5847965502901698114_x.jpg" className='me-image-2   sm-x2:w-60  sm-x2:h-64  sm-x2:relative  sm-x2:z-50    hidden md:block object-cover  w-72  h-80   mx-auto mb-4 rounded-full' alt="" />
        <div className='text-9xl md:text-6xl md:text-center   sm-x2:mt-8 sm-x3:!text-4xl  md:w-full w-max relative text-white font-swap font-extrabold'>
          <span className='z-20 relative'>Hi! I’m Kasra</span>
           <img className='absolute top-4 md:right-40 md:top-0 w-36  z-10 sm-x3:!right-0  right-2 ' src="https://demo.themecon.net/onlyme/html/images/hero-title-pettern-bg.png" alt="" />
           </div>
        <p className='text-5xl md:text-3xl md:text-center md:w-full mt-4 w-max relative  sm-x2:!text-2xl text-white font-swap font-extrabold z-10'>  Front-end Developer</p>
        <div className=' pt-12 md:text-center'>
          <span className='text-2xl   text-white font-swap font-extrabold'>Hire Me</span>
          <a href="#footer" className='z-[999] relative'><button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
        </div>
        <img className='TopBar-logo absolute    sm-x2:left-0  sm-x2:w-full' src="https://demo.themecon.net/onlyme/html/images/vertical-logo.png" alt="" />
        <img src="/Images/shomal2.jpg" className='me-image absolute right-[220px] w-[420px] -top-[74px] lg:right-28 md:hidden ' alt="" />
        <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" className='dot-bg md:!right-[45%] md:z-[-1]   lg:right-5 right-[97px]  md:-top-20 top-32 absolute' alt="" />
      </section>
      <div className='flex gap-5 w-11 ml-auto  sm-x2:relative  sm-x2:top-12  pb-10 flex-col text-2xl text-white'>
                <a href="https://instagram.com/_ka.s.ra_?igshid=ZDc4ODBmNjlmNQ==" target='_blank'><AiOutlineInstagram className='ml-auto mr-7 '/></a>
                        <a href="https://t.me/shahiinnnnn" target='_blank'><BiLogoTelegram className='ml-auto mr-7 '/></a>
                        <a href="https://github.com/KasraMg" target='_blank'><BsGithub className='ml-auto mr-7 '/></a>
                        <a href="https://discord.com/users/shahin#6613" target='_blank'><BsDiscord className='ml-auto mr-7 '/></a>
       
         
      </div>
      <a href='#footer' onClick={()=> window.scrollTo(500,7900)} className='absolute z-50 cursor-pointer lg:bottom-10  sm-x2:!-bottom-7 md:!-bottom-36 bottom-32'>
        <p className='scrollDown text-white '>Scroll Down   <img className=' absolute z-50 cursor-pointer w-4 top-0 -left-10' src="https://demo.themecon.net/onlyme/html/images/scroll-down-arrow.png" alt="" /></p>

      </a>

    </div>
  )
}
