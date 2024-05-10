function SliderItem({ src, alt, active }) {
    return (
        <div className={`slider-item ${active ? 'active' : ''}`}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default SliderItem;