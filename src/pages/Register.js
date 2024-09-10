import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Imagelock from "../assets/img/Lock.png";
import Imagesign from "../assets/img/At sign.png";
import Imageuser from "../assets/img/User (2).png";
import Imagephone from "../assets/img/Phone.png";
import Imageemail from "../assets/img/Email (1).png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Navigation />
      <section className="pt-16 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto py-5 px-2">
            <div className="bg-white rounded-lg p-6 shadow-xl flex flex-col items-center gap-5">
              <h1 className="text-center font-medium text-2xl">Register</h1>
              <form className="w-full">
                <div className="gap-5 flex flex-col">
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 left-2 top-3 absolute"
                      src={Imageuser}
                      alt="User icon"
                    />
                    <input
                      type="text"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Fullname"
                    />
                  </div>
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 top-3 left-2 absolute"
                      src={Imagesign}
                      alt="At sign icon"
                    />
                    <input
                      type="text"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Username"
                    />
                  </div>
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 top-3 left-2 absolute"
                      src={Imageemail}
                      alt="Email icon"
                    />
                    <input
                      type="text"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 top-3 left-2 absolute"
                      src={Imagephone}
                      alt="Phone icon"
                    />
                    <input
                      type="text"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Whatsapp"
                    />
                  </div>
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 top-3 left-2 absolute"
                      src={Imagelock}
                      alt="Lock icon"
                    />
                    <input
                      type="password"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Password"
                    />
                  </div>
                  <div className="border relative border-slate-500 rounded-md">
                    <img
                      className="w-5 top-3 left-2 absolute"
                      src={Imagelock}
                      alt="Lock icon"
                    />
                    <input
                      type="password"
                      className="block py-2 px-10 w-full text-lg outline-none focus:ring-blue-300 focus:ring-4 rounded-md"
                      placeholder="Retype Password"
                    />
                  </div>
                  <button
                    type="button"
                    className="text-center bg-blue-500 py-2 text-lg rounded-md text-white font-medium hover:bg-blue-600"
                    onClick={() => console.log('Submit clicked')}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="text-center py-2 rounded-md text-slate-500 font-medium"
                    onClick={() => navigate('/Login')}
                  >
                    <span className="hover:text-slate-400">
                      Already have an account?{' '}
                    </span>
                    <span className="hover:text-blue-500">Login</span>
                  </button>
                </div>
              </form>
              <h1 className="text-center text-sm text-slate-500 mt-4">
                © 2024 Codepolitan. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
