import axios from 'axios';

import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Rate from './Rate'
import SearchBar from './SearchBar';

//ce composant represente la liste de tous nos produits (on pourra également y appliquer des filtres suivant la catégorie ou la propriété bestsell)
function ShoppingList({listCart, setListCart}){
    //la gestion de l'état de nos produit est mis sur le composant App nous ne faisons que la récuperer ici
    //cette gestion a été mis sur ce parent pour pouvoir communiquer les changements sur tout les composants fils par props. Rappelez-vous les props sont transmis dans un seul sens: du parent à l'enfant.
    let dim = 260;
    let [allProduct, setAllProduct] = useState([]);

    const runCallback = (cb) => {
        return cb();
    };

    function addToCart(e, product){
        e.preventDefault();
        setListCart(
            [...listCart, product]
        )
    }

    //permet d'aaficher le nombre d'étoiles sur chaque produit

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/')
        .then((res)=>{
            setAllProduct(res.data)
        })
        .catch((error)=>{
            console.error(error);
        });
    })    

    return (
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">Tous nos produits</li>
                        <li data-filter=".Nouveau-arrivals">Nouvel arrivage</li>
                        <li data-filter=".hot-sales">Meilleurs ventes</li>
                    </ul>
                </div>
            </div>
            <div className="row product__filter">
                {
                    allProduct.map((prd)=>{
                        return <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix Nouveau-arrivals" key={prd.id}>
                                <div className="product__item">
                                    <div className="product__item__pic set_bg">
                                        <img src={prd.image} width={dim} height={dim} alt="" />
                                        {/* <span className="label">Nouveau</span> */}
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                            <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>{prd.title}</h6>
                                        <Link to="#" className="add-cart" onClick={(e)=>addToCart(e, prd)}>+ Ajouter au panier</Link>
                                        <div className="rating">
                                            {
                                                runCallback(() => {
                                                    const row = [];
                                                    for (var i = 0; i < prd.rating.rate; i++) {
                                                      row.push(<>  <Rate key={i} /> </>);
                                                    }
                                                    return row;
                                                  })
                                            }
                                        </div>
                                        <h5>{prd.price}</h5>
                                        <div className="product__color__select">
                                            <label htmlFor="pc-1">
                                                <input type="radio" id="pc-1"/>
                                            </label>
                                            <label className="active black" htmlFor="pc-2">
                                                <input type="radio" id="pc-2"/>
                                            </label>
                                            <label className="grey" htmlFor="pc-3">
                                                <input type="radio" id="pc-3"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <SearchBar />
                            </div>
                    })
                }
            </div>
        </div>
    </section>
    );
}

export default ShoppingList