import imageProfil from '../assets/img/ai-generated-8775742_1920.png';
import imageReact from '../assets/img/ai-generated-8684869_1920.jpg';
import imageLaravel from '../assets/img/ai-generated-8329596_1920.jpg';


const Program = () => {
    return (
        <section className="py-20 " id="program">
        <div className="">
            <div className="w-full">
                <div className="flex flex-wrap gap-5 lg:gap-0  justify-center lg:justify-evenly items-center">
                    <div className=" flex flex-col items-center justify-center">
                        <img className="w-[16rem]" src={imageProfil} alt=""></img>
                        <h1 className="text-center font-bold text-blue-500 text-xl" data-aos="fade-down" >Course-KU Pro</h1>
                        <h4 className="w-[18rem] font-medium text-center">Memberikan Pengalaman Yang Lebih Ekspert</h4>
                    </div>
                    <div>
                        <p className="max-w-xl font-medium text-sm px-4 text-justify">Disini kamu akan belajar bagaimana membuild dan mendeploy apps yang kamu buat agar mudah dalam pengembangan nantinya. Yuk Gabung dengan kami untuk meningkatkan skill codingmu</p>
                        <div className="flex items-center flex-wrap gap-10 lg:gap-5 justify-center mt-10">
                            <div data-aos="zoom-in"   className="w-[18rem] flex flex-col items-center font-bold  overflow-hidden bg-white shadow-md border  h-[25rem]">
                                <span className="w-full flex justify-end px-8 py-2  ">React JS</span>
                                <img className="w-[14rem] mb-3" src={imageReact} alt=""></img>
                                <h1>Course Khusus</h1>
                                <h1 className="">Menggunakan React JS</h1>
                                <a className="bg-blue-500 duration-300 text-white py-2 px-4 rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500  my-3" href="">Daftar Sekarang</a>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" className="w-[18rem] flex flex-col items-center font-bold  overflow-hidden bg-white shadow-md border  h-[25rem]">
                                <span className="w-full flex justify-end px-8 py-2  ">Laravel 11</span>
                                <img className="w-[14rem] mb-3" src={imageLaravel} alt=""></img>
                                <h1>Course Khusus</h1>
                                <h1 className="">Menggunakan Laravel 11</h1>
                                <a className="bg-blue-500 duration-300 text-white py-2 px-4 rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500  my-3" href="">Daftar Sekarang</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Program