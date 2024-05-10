function SliderDots({ numberOfSlides, activeSlide, handleDotClick }) {
    function createDots() {
        const dots = [];
        for (let i = 1; i <= numberOfSlides; i++) {
            dots.push(
                <span
                    key={i}
                    className={`slider-dot ${activeSlide === i ? 'active' : ''}`}
                    onClick={() => handleDotClick(i)}
                ></span>
            );
        }
        return dots;
    }

    return (
        <div className="slider-dots">
            {createDots()}
        </div>
    );
}

export default SliderDots;