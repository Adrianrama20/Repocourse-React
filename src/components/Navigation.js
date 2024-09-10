import myImage from '../assets/img/course.png';
import imageHumburger from '../assets/img/hamburger.png'
import { useNavigate } from "react-router-dom"



const Navigation = () =>{
    const navigate = useNavigate()
    function show() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none'; // Jika sudah tampil, sembunyikan
        } else {
            sidebar.style.display = 'block'; // Jika tidak tampil, tampilkan
        }
    }
    
    return (
        <nav className="flex lg:justify-around z-20    px-4 top-0 justify-between font-medium w-full bg-white/95 fixed shadow-md backdrop:blur-3xl items-center">
        <a href="#home">
            <div className="flex items-center gap-4 py-4" >
                <img className="w-10 h-11" src={myImage} alt=""></img>
                <h1 data-aos="fade-right">Course-KU</h1>
            </div>
        </a>
        <div className="hidden lg:flex">
            <ul className="flex py-4 px-4 gap-10">
                <li className="hover:text-blue-500"><a href="#program">Program</a></li>
                <li className="hover:text-blue-500"><a href="#jadwal">Jadwal Live Class</a></li>
                <li className="hover:text-blue-500"><a href="#about">About Course-KU</a></li>
                <li className="hover:text-blue-500"><a href="#artikel">Artikel KU</a></li>
                <li className=""><a className='hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 duration-300 bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer ' onClick={() => navigate ('/Login')}>Login</a></li>
                <li className=""><a className='hover:bg-blue-500 hover:text-white duration-300 bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md' onClick={() => navigate ('/Register')}>Register</a></li>
            </ul>
            <h4 className="py-4 px-4 text-blue-500"><a href="">Membership</a></h4>
        </div>
       
        <div className="relative  lg:hidden ">
            <img onClick={show} className="w-6 relative z-20 " src={imageHumburger} alt=""></img>
            <ul className="py-5 absolute text-left rounded-md sidebar right-0 w-[200px] hidden bg-white/100 backdrop-blur-lg shadow-lg h-[280px]">
                <li className="py-2 px-5"><a  className="hover:text-blue-500" href="#program">Program</a></li>
                <li className="py-2 px-5"><a className="hover:text-blue-500" href="#jadwal">Jadwal Live Class</a></li>
                <li className="py-2 px-5  "><a className="hover:text-blue-500" href="#about">About Course-KU</a></li>
                <li className="py-2 px-5  "><a className="hover:text-blue-500" href="#artikel">Artikel KU</a></li>
                <li className="py-2 px-5    hover:text-blue-300 text-blue-400 "><a className="" onClick={() => navigate ('/Login')}>Login</a></li>
                <li className="py-2 px-5  hover:text-slate-300 text-slate-500   "><a href="">Logout</a></li>
            </ul>
            
        </div>
       
    </nav>
    )
}

export default Navigation