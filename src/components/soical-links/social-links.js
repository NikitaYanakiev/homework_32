import soc1 from '../../img/facebook.svg';
import soc2 from '../../img/twitter.svg';
import soc3 from '../../img/instagram.svg';
import './social-links.css';

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="#" className="social-link">
                <img src={soc1} alt="facebook" />
            </a>
            <a href="#" className="social-link">
                <img src={soc2} alt="twitter" />
            </a>
            <a href="#" className="social-link">
                <img src={soc3} alt="instagram" />
            </a>
        </div>
    );
}

export default SocialLinks;