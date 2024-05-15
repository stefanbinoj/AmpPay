import './Carousel1.css'
import img from '../images/pexels-ssteenbergenn-2966315.jpg'
const Carousel1 = () => {
    return(
        <div className='carousel-container'>
            <div className='carousel-img'>
                <img src={img} alt='img'/>
            </div>
        </div>
    )
}
export default Carousel1