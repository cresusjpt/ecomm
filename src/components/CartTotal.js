import { Link } from "react-router-dom";
import cart from '../assets/images/cart.png'

function CartTotal(){
    return (
        <span>
            <Link to="/favs"><img src={cart} alt="rechercher" /><span>0</span></Link>
            <div className="price">€0.00</div>
        </span>
    );
}

export default CartTotal