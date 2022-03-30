import prod1 from '../assets/images/product-1.jpg'
import prod2 from '../assets/images/product-2.jpg'
import prod3 from '../assets/images/product-3.jpg'
import prod4 from '../assets/images/product-4.jpg'
import prod5 from '../assets/images/product-5.jpg'
import prod6 from '../assets/images/product-6.jpg'
import prod7 from '../assets/images/product-7.jpg'
import prod8 from '../assets/images/product-8.jpg'

function ShoppingList(){
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix Nouveau-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod1} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€67.24</h5>
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
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod2} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€67.24</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-4">
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label className="active black" htmlFor="pc-5">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label className="grey" htmlFor="pc-6">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix Nouveau-arrivals">
                    <div className="product__item sale">
                        <div className="product__item__pic set_bg">
                            <img src={prod3} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Multi-pocket Chest Bag</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€43.48</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label className="active black" htmlFor="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label className="grey" htmlFor="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod4} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Diagonal Textured Cap</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€60.9</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label className="active black" htmlFor="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label className="grey" htmlFor="pc-12">
                                    <input type="radio" id="pc-12"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix Nouveau-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod5} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Lether Backpack</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€31.37</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-13">
                                    <input type="radio" id="pc-13"/>
                                </label>
                                <label className="active black" htmlFor="pc-14">
                                    <input type="radio" id="pc-14"/>
                                </label>
                                <label className="grey" htmlFor="pc-15">
                                    <input type="radio" id="pc-15"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item sale">
                        <div className="product__item__pic set_bg">
                            <img src={prod6} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Ankle Boots</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€98.49</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-16">
                                    <input type="radio" id="pc-16"/>
                                </label>
                                <label className="active black" htmlFor="pc-17">
                                    <input type="radio" id="pc-17"/>
                                </label>
                                <label className="grey" htmlFor="pc-18">
                                    <input type="radio" id="pc-18"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix Nouveau-arrivals">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod7} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>T-shirt Contrast Pocket</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€49.66</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-19">
                                    <input type="radio" id="pc-19" />
                                </label>
                                <label className="active black" htmlFor="pc-20">
                                    <input type="radio" id="pc-20" />
                                </label>
                                <label className="grey" htmlFor="pc-21">
                                    <input type="radio" id="pc-21" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div className="product__item">
                        <div className="product__item__pic set_bg">
                            <img src={prod8} alt="" />
                            <span className="label">Nouveau</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="img/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="img/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="img/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Basic Flowing Scarf</h6>
                            <a href="#" className="add-cart">+ Ajouter au panier</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>€26.28</h5>
                            <div className="product__color__select">
                                <label htmlFor="pc-22">
                                    <input type="radio" id="pc-22" />
                                </label>
                                <label className="active black" htmlFor="pc-23">
                                    <input type="radio" id="pc-23" />
                                </label>
                                <label className="grey" htmlFor="pc-24">
                                    <input type="radio" id="pc-24" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ShoppingList