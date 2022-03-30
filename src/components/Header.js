import search from '../assets/images/search.png'
import heart from '../assets/images/heart.png'
import { Link,Outlet } from 'react-router-dom';
import CartTotal from './CartTotal';
function Header(){
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <Link to="/" className="active"><img src="img/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li><Link to="/" className="active">Acceuil</Link></li>
                                    <li><Link to="/cart">Panier</Link></li>
                                    <li><Link to="/profil">Profile</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <Link className="search-switch" to="/search"><img src={search} alt="rechercher" /></Link>
                                <Link to="/favs"><img src={heart} alt="rechercher" /></Link>
                                <CartTotal />
                                
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars"></i></div>
                </div>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </> 
    );
}

export default Header