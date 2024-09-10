import imageMateri from '../assets/img/6969720_3452442.jpg'
import imageRoadmap from '../assets/img/15858008_5673737.jpg'

const About = () => {
    return (
        <section id="about" className="pt-10  bg-blue-50">
        <div className="">
            <div className="w-full  ">
                <div className="flex px-4 py-20 justify-center gap-8  flex-wrap">
                    <div data-aos="fade-down" data-aos-duration="1000" className="w-[20rem] ">
                        <img  className="w-[20rem] shadow-md mb-2" src={imageMateri} alt=""></img>
                        <h1  className="text-center  font-bold py-3">Materi Kekinian</h1>
                        <h1 data-aos="" className="text-center leading-[2] text-sm">Materi di sini selalu up to date sesuai dengan perkembangan teknologi saat ini. Sehingga peserta akan mendapatkan materi yang pasti selalu terbaru. Selain itu semua materi akan selalu di update secara berkala.</h1>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className="w-[20rem] "> 
                        <img className="w-[20rem] shadow-md mb-2" src={imageRoadmap} alt=""></img>
                        <h1 className="text-center font-bold py-3">Roadmap Jelas</h1>
                        <h1 className="text-sm leading-[2] text-center">Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah di susun sesuai dengan Roadmap nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan.</h1>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" className="w-[20rem] "> 
                        <img className="w-[20rem] shadow-md mb-2" src={imageMateri} alt=""></img>
                        <h1 className="text-center font-bold py-3">Instruktur Berpengalaman</h1>
                        <h1 className="text-sm  leading-[2] text-center">Di sini, semua diajarkan dari awal sampai akhir. Setiap kelas sudah di susun sesuai dengan Roadmap nya. Sehingga peserta tidak akan tersesat ketika belajar, cukup ikuti kelas yang diinginkan.</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About