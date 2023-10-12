import slideImage from '../../assets/image/slide.jpg';
function Slide() {
    return (
        <div className="carousel-item active">
            <img src={slideImage} className="d-block w-100" alt="..." />
        </div>
    )
}
export default Slide