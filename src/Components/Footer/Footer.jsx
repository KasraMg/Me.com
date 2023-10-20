import React, { useRef } from 'react'
import { useFormik } from "formik";
import swal from 'sweetalert';
import { registerSchema, registerSchemaFa } from '../../Validations/rules';
import { BsArrowRight, BsDiscord, BsGithub } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next';
import { Map } from '../Map/Map';
import "leaflet/dist/images/marker-shadow.png";
export default function Footer() {
    const footerform = useFormik({
        initialValues: { name: "", email: "", message: "" },
        validationSchema: i18n.language == 'fa' ? registerSchemaFa : registerSchema,
    });

    const { t } = useTranslation();
    const nameInput = useRef()
    const messageInput = useRef()
    const emailInput = useRef()

    const formClickHandle = (e) => {
        e.preventDefault();
        console.log(footerform.values.email);

        if (footerform.values.name.length == 0) {
            swal({
                title: i18n.language == 'fa' ? 'لطفا اسم خود را بنویسید' : 'Please Type Your Name',
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else if (footerform.values.email.length == 0) {
            swal({
                title: i18n.language == 'fa' ? 'لطفا ایمیل خود را بنویسید' : 'Please Type Your Email',
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else if (footerform.values.message.length == 0) {
            swal({
                title: i18n.language == 'fa' ? 'لطفا مسیج خود را بنویسید' : 'Please Type Your Message',
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else if (footerform.errors.email) {
            swal({
                title: footerform.errors.email && footerform.errors.email,
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else if (footerform.errors.name) {
            swal({
                title: footerform.errors.name && footerform.errors.name,
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else if (footerform.errors.message) {
            swal({
                title: footerform.errors.message && footerform.errors.message,
                icon: 'error',
                button: i18n.language == 'fa' ? 'امتحان دوباره' : 'try again'
            })
        } else {
            swal({
                title: i18n.language == 'fa' ? 'ایمیل ارسال شد  ' : 'Email Was Send',
                icon: 'success',
                button: i18n.language == 'fa' ? 'ایول' : ' ok'
            }).then(res => {
                footerform.handleReset()
            })
        }



    }

    return (
        <>
         
        <footer data-aos-duration="3000" id='footer' className='bg-[url(/Images/softBg.jpg)] relative   border-t-2 md:bg-repeat-round  border-red-600 border-solid   pt-16 '>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text " className=" w-12 mx-auto text-red-600 relative z-[999]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
            <p className='text-white text-3xl relative z-[999] font-swap font-extrabold mt-5 text-center'>{t('footer.footer_title')}</p>
            <div className="overlay" style={{background:'#231f33e8'}}></div>
            <main className='flex  relative z-[999] sm-x2:!pb-4 gap-48 justify-center md:flex-col md:justify-center sm:!px-6 md:px-10 sm:pt-16  lg:gap-20 pt-32 pb-32'>
                <div>
                    <p className='text-[#727272] font-extrabold font-swap'>{t('footer.Linkedin_title')}:</p>
                    <div className='text-white text-2xl sm:!text-[20px] mt-4 font-swap'>
                        <a href='https://www.linkedin.com/in/kasramg85/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2FIEXvre8QJi13fb48zDm8w%3D%3D'>Click on me</a>
                    </div>
                    <p className='text-[#727272] font-extrabold font-swap mt-8'>{t('footer.email_title')}</p>
                    <p className='font-swap  text-2xl sm:!text-[20px] text-red-600 mt-4 sm:break-words'>kasrakasra924@gmail.com</p>

                    <p className='text-[#727272] font-extrabold font-swap mt-8'>{t('footer.phone_title')}</p>
                    <p className='font-swap  text-2xl sm:!text-[20px] text-white mt-4 sm:break-words'>09046417084</p>
                </div>

                <form action="mailto:kasragithub7@gmail.com" method="post" enctype="text/plain"  >
                    <section className='grid font-swap gap-6'>
                        <label className='text-[#727272]' htmlFor="">{t('footer.lable1')} *</label>
                        <input type="text"
                            ref={nameInput}
                            name="name"
                            value={footerform.values.name}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-b-2 border-[#333]' placeholder={t('footer.placeHolder1')} />
                    </section>
                    <section className='grid font-swap gap-6 my-8'>
                        <label className='text-[#727272]' htmlFor="">{t('footer.lable2')} *</label>
                        <input type="email"
                            ref={emailInput}
                            name="email"
                            value={footerform.values.email}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-b-2 border-[#333]' placeholder={t('footer.placeHolder2')} />
                    </section>
                    <section className='grid font-swap gap-6'>
                        <label className='text-[#727272]' htmlFor="">{t('footer.lable3')} *</label>
                        <input
                            ref={messageInput}
                            name="message"
                            value={footerform.values.message}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            type="text" className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] rounded pt-[14px] pb-4 border-solid border-b-2 border-[#333]' placeholder={t('footer.placeHolder3')} />
                    </section>

                    <button onClick={(e) => formClickHandle(e)} className='bg-red-600 rounded-md md:w-full font-swap text-white py-2 mt-8 rounded-sm px-6'>{t('footer.button')}</button>
                </form>
            </main>
            <div className='flex sm-x2:!px-6 sm:!px-5 lg:px-16 md:gap-20 relative gap-48 justify-center md:flex-col md:justify-center pt-4  py-20 '>
                <div className='z-50  pl-10 lg:pl-8 md:!pl-0 w-[330px] md:flex md:justify-between md:w-full'>
                    <div>
                        <p className='text-[#727272] font-extrabold font-swap'>{t('footer.address_title')}</p>
                        <p className='text-red-600 text-2xl whitespace-nowrap sm:!text-[20px] mt-4 font-swap'>{t('footer.address_value')}</p>
                    </div>

                    <div className='flex  gap-4 items-center text-white text-2xl md:mt-2 mt-32 md:hidden'>
                        <p>{t('footer.location_title')} </p>
                        <div className='bg-white relative top-1 p-2 rounded-full '>
                            <BsArrowRight className='text-red-600 text-2xl ' /></div>
                    </div>
                </div>
                <Map /> 
            </div>
        </footer>

      
            <section className='flex sm:flex-col-reverse sm:px-2 sm:text-center sm:text-[13px]   justify-between px-12 border-solid border-t-2 border-white py-5 bg-[#16171b]'>
                <p className='text-white font-swap sm:mt-3'> {t('footer.last_text')}</p>
                <div className='flex gap-5 sm:justify-evenly sm:gap-0  sm:pb-4 text-white text-2xl'>

                    <a href="https://instagram.com/_ka.s.ra_?igshid=ZDc4ODBmNjlmNQ==" target='_blank'><AiOutlineInstagram /></a>
                    <a href="https://t.me/shahiinnnnn" target='_blank'><BiLogoTelegram /></a>
                    <a href="https://github.com/KasraMg" target='_blank'><BsGithub /></a>
                    <a href="https://discord.com/users/shahin#6613" target='_blank'><BsDiscord /></a>
                </div>
            </section>



    </> 
    )
}
