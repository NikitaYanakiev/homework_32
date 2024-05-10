import './header.css';
import logo from '../../img/logo.svg';


function Header() {
    function handlerBurger() {
        const menu = document.querySelector('.header__nav');
        menu.classList.toggle('active');
    }

    return (
        <header className="header">
            <div className="header__container">
                <a href='#' className="header__logo">
                    <img src={logo} alt="logo" />
                </a>

                <label className="header__burger" htmlFor="burger">
                    <input type="checkbox" id="burger" onClick={handlerBurger}/>
                    <span/>
                    <span/>
                    <span/>
                </label>            
                <nav className='header__nav'>
                    <ul className="header__list">
                        <li className="header__link"><a className="header__link-item" href="#">Store</a></li>
                        <li className="header__link"><a className="header__link-item" href="#">Accessories</a></li>
                        <li className="header__link"><a className="header__link-item" href="#">Controllers</a></li>
                        <li className="header__link"><a className="header__link-item" href="#">Peripherals</a></li>
                        <li className="header__link"><a className="header__link-item" href="#">Offers</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;