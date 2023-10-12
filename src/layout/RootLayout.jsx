import { Outlet } from 'react-router-dom'
import Footer from "../partials/Footer"
import Header from "../partials/Header"
import Navigation from "../partials/Navigation"
import Slider from "../partials/Slider"
function RooTLayout() {
    
    return (
        <section className="container-fluid">
            <div className="container">
                <Header/>
                <Navigation/>
                <Outlet />
                <Footer/>
            </div>
        </section>
    )
}
export default RooTLayout