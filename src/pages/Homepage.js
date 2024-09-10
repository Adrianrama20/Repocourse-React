import About from "../components/About"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Navigation from "../components/Navigation"
import Program from "../components/Program"
import Recom from "../components/Recom"
import Schedule from "../components/Schedule"

const Homepage = () =>{
    return (
        <>
            <Navigation/>
            <Home/>
            <Schedule/>
            <Program/>
            <About/>
            <Recom/>
            <Footer/>
        </>
        

    )
}
export default Homepage