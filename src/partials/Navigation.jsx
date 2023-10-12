import {Link} from 'react-router-dom'
function Navigation(){
    return (
        <div className='d-flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}
export default Navigation