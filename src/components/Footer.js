function Footer(){
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <img src="img/footer-logo.png" alt=""/>
                        </div>
                        <p>Un composant footer</p>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6"></div>
                <div className="col-lg-2 col-md-3 col-sm-6"></div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6"></div>
            </div>
        </div>
    </footer>
    );
}

export default Footer