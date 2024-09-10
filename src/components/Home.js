import imageHome from '../assets/img/learning-1.jpg';
import imageIcon from '../assets/img/Group 10.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

   
  

const Home = () => {
    useEffect(() => {
        // Inisialisasi AOS
        AOS.init({
            once: true, // Animasi hanya berjalan sekali
        });

        // Inisialisasi GSAP untuk efek teks ketik
        gsap.to('.type', {
            duration: 3,
            text: "Mulai belajar terarah dengan baik",
            ease: "power1.inOut",
            delay: 1, // Delay untuk sinkronisasi fade-in dan typing
        });
    }, []);


     
    
    
    return (
        <section className="pt-[7rem] mb-20 " id="home">
        <div className="">
            <div className="px-4  flex w-full justify-evenly  gap-2  items-center flex-col lg:flex-row" >
                <img className="max-w-[22rem] lg:max-w-xl " src={imageHome} alt=""></img>
                <div className="flex flex-col p-5 max-w-sm  items-center ">
                    <img className="w-56 py-5 " src={imageIcon} alt=""></img>
                    <h1 className="text-center text-xl font-bold" data-aos-duration="1000" data-aos="fade-down" data-aos-anchor-placement="top-bottom">Bangun Karirmu Sebagai Developer Profesional</h1>
                    <h2 className="text-center type py-4 text-md font-medium"></h2>
                    <div data-aos-offset="50" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="500" className='mt-3'><a className=" bg-blue-500 px-6 py-3 duration-300 relative -z-5 font-bold hover:bg-white hover:text-blue-500 hover:shadow-md   text-blue-50 rounded-md"  href="">Belajar Sekarang</a></div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default Home