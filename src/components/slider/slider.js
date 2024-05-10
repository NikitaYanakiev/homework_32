import { useState } from 'react';
import SliderItem from '../slider-item/slider-item';
import './slider.css';
import img1 from '../../img/dual-shock_01.png';
import img2 from '../../img/dual-shock_02.png';
import img3 from '../../img/dual-shock_03.png';

function Slider() {
    const [activeSlide, setActiveSlide] = useState(2);

    function handleDotClick(slideId) {
        setActiveSlide(slideId);
    }

    return (
        <div className='slider'>
            <div className="slider__wrapper">
                <SliderItem 
                    src={img1} 
                    alt="Dual Sense" 
                    active={activeSlide === 1} />
                <SliderItem 
                    src={img2} 
                    alt="Dual Sense" 
                    active={activeSlide === 2} />
                <SliderItem 
                    src={img3} 
                    alt="Dual Sense" 
                    active={activeSlide === 3} />
            </div>

            <div className="slider-dots">
                <span className={`slider-dot ${activeSlide === 1 ? 'active' : ''}`} onClick={() => handleDotClick(1)}></span>
                <span className={`slider-dot ${activeSlide === 2 ? 'active' : ''}`} onClick={() => handleDotClick(2)}></span>
                <span className={`slider-dot ${activeSlide === 3 ? 'active' : ''}`} onClick={() => handleDotClick(3)}></span>
            </div>
        </div>
    );
}

export default Slider;
