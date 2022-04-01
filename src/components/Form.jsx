function Form(){
    return (
    <div className="col-lg-6 col-md-6">
        <div className="contact__form">
            <form action="#">
                <div className="row">
                    <div className="col-lg-6">
                        <input type="text" placeholder="Nom" />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                        <textarea placeholder="Message"></textarea>
                        <button type="submit" className="site-btn">Nous envoyer un message</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Form