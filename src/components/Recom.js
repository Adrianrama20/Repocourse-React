import imageCyber from '../assets/img/ai-generated-8144415_1920.png'
import imagePentest from '../assets/img/2150169850.jpg'
import imageData from '../assets/img/2150169860.jpg'
import imageScience from '../assets/img/2149369110.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recom = () =>{
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true, // Disable after animation complete
        });
    }, []);
    return(
        <section id='artikel' className="py-20  ">
            
            <div className="w-full justify-center items-center flex flex-col relative  ">
                <div className='w-[10rem] h-[10rem] hidden lg:block -z-20 top-10 right-5  bg-blue-100 rounded-full absolute' ></div>
                <div className='w-[3rem] h-[3rem] -z-20 top-0 left-24  bg-slate-300 rounded-full absolute' ></div>
                <div className='w-[5rem] h-[5rem] -z-20 top-0  left-5 bg-red-100 rounded-full absolute' ></div>
                <div className=" ">
                    <h1 className="lg:text-left text-center text-2xl pt-10   text-slate-600 font-bold">Berbagai Artikel Untuk-Mu</h1>
                    <h1 className='lg:text-left text-center font-medium text-slate-500  py-5'>Temukan Lebih Banyak Informasi</h1>
                    <div className="flex gap-5 font-medium text-center flex-wrap justify-center ">
                        <div className='group'>
                            <div data-aos="fade-up" data-aos-duration="500">
                                <div className="w-[16rem] group-hover:scale-105 duration-300 p-2 shadow-lg bg-white  rounded-tr-lg rounded-tl-lg overflow-hidden ">
                                    <img className='w-[16rem] rounded-tr-md rounded-tl-md h-[10rem] ' src={imageCyber}></img>
                                    <h1 className='py-4 '>Cyber Security</h1>
                                </div>
                            </div>
                        </div>
                       
                        <div className='group'>
                           <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                                <div   className="w-[16rem] p-2 group-hover:scale-105 duration-300   bg-white shadow-lg rounded-tr-lg rounded-tl-lg overflow-hidden">
                                    <img className='w-[16rem] rounded-tr-md rounded-tl-md h-[10rem]' src={imagePentest}></img>
                                    <h1 className='py-4'>Data Secured</h1>
                                </div>
                           </div>
                        </div>
                        <div className='group'>
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                                <div className="w-[16rem] p-2 group-hover:scale-105 duration-300  bg-white shadow-lg rounded-tr-lg rounded-tl-lg overflow-hidden">
                                    <img className='w-[16rem] h-[10rem] rounded-tr-md rounded-tl-md' src={imageData}></img>
                                    <h1 className='py-4'>Data Analytics</h1>
                                </div>
                            </div>
                        </div>
                        <div className='group'>
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"> 
                                <div   className="w-[16rem] p-2  group-hover:scale-105 duration-300  bg-white shadow-lg rounded-tr-lg rounded-tl-lg overflow-hidden">
                                    <img className='w-[16rem] h-[10rem] rounded-tr-md rounded-tl-md' src={imageScience}></img>
                                    <h1 className='py-4'>Data Science</h1>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Recom
