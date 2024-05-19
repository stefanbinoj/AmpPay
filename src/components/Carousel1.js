import './Carousel1.css'
import img from '../images/pexels-ssteenbergenn-2966315.jpg'
const Carousel1 = () => {
    return(
        <div className='carousel-container'>
            <div className='carousel-img'>
                <img src={img} alt='img'/>
            </div>
        
            <div className="shape-container">
                <svg className="shape" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="22" fill="white" />
                    <foreignObject x="10" y="35" width="80" height="80">
                    <span class="material-symbols--report-off-outline"></span>
                    </foreignObject>
                </svg>

                <svg className="shape" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="22" fill="white" />
                    <text className='text' x="50" y="50" fill="black" textAnchor="middle" alignmentBaseline="middle">Y</text>
                </svg>

                <svg className="shape" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="22" fill="white" />
                    <text className='text' x="50" y="50" fill="black" textAnchor="middle" alignmentBaseline="middle">A</text>
                </svg>

                <svg className="shape" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="22" fill="white" />
                    <text className='text' x="50" y="50" fill="black" textAnchor="middle" alignmentBaseline="middle">Y</text>
                </svg>
            </div>
        </div>
    )
}
export default Carousel1