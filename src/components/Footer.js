import imageFacebook from '../assets/img/Facebook.png'
import imageInstagram from '../assets/img/Instagram (1).png'
import imageGithub from '../assets/img/GitHub.png'
import imageTwitter from '../assets/img/TwitterX.png'

const Footer = () => {
    return (
        <section className="bottom-0 bg-blue-500  ">
        <div className="">
            <div className=" w-full mx-auto  ">
                <div className=" flex px-4 flex-wrap  items-center py-10 flex-col ">
                    <h1 className="text-center my-4 text-lg text-white font-bold">Media Contact</h1>
                    <div className=" flex gap-4">
                        <a href=""><img className="w-[2rem]" src={imageFacebook} alt=""></img></a>
                        <a href=""><img className="w-[2rem]" src={imageInstagram} alt=""></img></a>
                        <a href=""><img className="w-[2rem]" src={imageGithub} alt=""></img></a>
                        <a href=""><img className="w-[2rem]" src={imageTwitter} alt=""></img></a>
                    </div>
                    <ul className="flex my-3 gap-5 text-white font-bold">
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact</li>
                        <li>Team</li>
                    </ul>
                    <p className="text-white text-xs">©2024 IrozzTBV | All Rights Reserved</p>

                </div>

            </div>
        </div>
    </section>
    )
}

export default Footer