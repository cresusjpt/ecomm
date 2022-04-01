import { Link } from "react-router-dom";

function FavProduct({listCart, setListCart}){

    function cartTotalPrice(value){
        let total = 0;
        for (let index = 0; index < value.length; index++) {
            total += value[index].price;
        }
        return Math.round(total * 100) /100
    }

    return (
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Panier</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Quantité</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listCart.map(
                                                (prd)=> <tr>
                                                        <td className="product__cart__item">
                                                            <div className="product__cart__item__pic">
                                                                <img src="img/shopping-cart/cart-1.jpg" alt="" />
                                                            </div>
                                                            <div className="product__cart__item__text">
                                                                <h6>{prd.title}</h6>
                                                                <h5>€{prd.price}</h5>
                                                            </div>
                                                        </td>
                                                        <td className="quantity__item">
                                                            <div className="quantity">
                                                                <div className="pro-qty-2">
                                                                    <input type="text" disabled={true} value="1" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart__price">€ {prd.price * 1}</td>
                                                        <td className="cart__close"><i className="fa fa-close"></i></td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <Link to="/">Liste des produits</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <Link className="fa fa-spinner" to="/cart"><i ></i> Mettre à jour</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Coupon</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon" />
                                    <button type="submit">Appliquer</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Total de votre panier</h6>
                                <ul>
                                    <li>Sous-Total <span>€ {
                                        cartTotalPrice(listCart)
                                        }</span></li>
                                    <li>Total <span>€ {
                                        cartTotalPrice(listCart)
                                        }</span></li>
                                </ul>
                                <Link to="#" className="primary-btn">Payer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FavProduct