import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import imageEmail from "../assets/img/Email (1).png"
import imageLock from "../assets/img/Lock.png"

const Login = () =>{
    const navigate = useNavigate()
    return(
        <div>
        <Navigation/>
        <section className="pt-10">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-lg my-20 mx-auto px-3">
      <div className="flex flex-col gap-10 px-5 py-10 items-center rounded-xl bg-white shadow-xl">
        <h1 className="text-center text-3xl font-medium text-slate-500">Login</h1>
        <form className="w-full">
          <div className="gap-4 flex flex-col">
            <label htmlFor="email">
              <div className="border relative border-slate-300 rounded-md pl-9">
                <img className="w-5 left-2 top-3 absolute" src={imageEmail} alt="Email Icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full py-2 pl-4 pr-4 focus:rounded-tr-lg focus:rounded-br-lg outline-none focus:ring-blue-300 focus:ring-4 text-xl"
                  placeholder="Email"
                />
              </div>
            </label>

            <label htmlFor="password">
              <div className="border relative border-slate-300 rounded-md pl-9">
                <img className="w-5 left-2 top-3 absolute" src={imageLock} alt="Password Icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block w-full py-2 pl-4 pr-4 focus:rounded-tr-lg focus:rounded-br-lg outline-none focus:ring-blue-300 focus:ring-4 text-xl"
                  placeholder="Password"
                />
              </div>
            </label>

            <a
              className="bg-blue-500 text-center text-lg py-2 text-white font-medium hover:bg-blue-600 rounded-md duration-300 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Login
            </a>

            <a
              className="bg-white border border-slate-300 text-center py-2 text-slate-400 font-medium relative rounded-md hover:bg-slate-400 duration-300 hover:text-white"
              href="#"
              onClick={() => navigate('/')}
            >
              Login with Google
            </a>

            <a
              className="bg-white text-center py-2 text-slate-400 font-medium relative rounded-md duration-300 hover:text-slate-300"
              onClick={() => navigate('/')}
            >
              Forgot Password
            </a>

            <a
              className="bg-white text-center py-2 text-slate-400 font-medium relative rounded-md duration-300 hover:text-slate-300"
              href="#"
            >
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </div>
    
    )
}
export default Login