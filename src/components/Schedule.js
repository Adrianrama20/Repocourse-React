import imageBuild from '../assets/img/building.png'

const Schedule = () =>{
    return (
        <section className="pt-[5rem] " id="jadwal">
        <div className="">
            <div className="w-full flex  bg-blue-50  justify-center items-center ">
                <div className="lg:max-w-4xl lg:px-10 ">
                    <div className="py-20 px-4   flex flex-col items-center  ">
                        <img className='w-10 h-10' src={imageBuild}></img>
                        <h1 data-aos="fade-down" className="text-center font-bold text-blue-500 my-3 text-xl">Jadwal Live Class Terdekat</h1>
                        <h1 className="text-center lg:text-lg font-medium" data-aos="fade-zoom-in"data-aos-easing="ease-in-back"data-aos-delay="300"data-aos-offset="0">Upgrade Skill secara live interaction. Bergabunglah sekarang untuk mengasah keterampilanmu! Cek Jadwal Live Class Terdekat yang tersedia!</h1>
                        <div data-aos="zoom-in" className='mt-5'><a  className="my-5 bg-white border-blue-500 border py-3 px-7 rounded-lg font-bold -z-5 text-blue-500 shadow-sm duration-500 hover:text-white hover:bg-blue-500"  href="">Cek Daftar Kelas Disini !</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Schedule