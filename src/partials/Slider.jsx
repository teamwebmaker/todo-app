import Slide from "../components/slide"
const slides = [1, 2, 3]
function Slider(){
    return (
        <div className="carousel slide">
            <div className="carousel-inner">
                {slides.map((slide) => <Slide />)}
            </div>
        </div>
    )
}
export default Slider