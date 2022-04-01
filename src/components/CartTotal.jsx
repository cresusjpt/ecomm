import { Link } from "react-router-dom";
import cart from '../assets/images/cart.png'

function CartTotal({listCart, setListCart}){

    function cartTotalPrice(value){
        let total = 0;
        for (let index = 0; index < value.length; index++) {
            total += value[index].price;
        }
        return Math.round(total * 100) /100
    }

    return (
        <span>
            <Link to="/favs"><img src={cart} alt="rechercher" /><span>0</span></Link>
            <div className="price">€{cartTotalPrice(listCart)}</div>
        </span>
    );
}

export default CartTotal