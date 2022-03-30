import Form from './Form'

function Contact(){
    return (
        <>
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__text">
                                <div className="section-title">
                                    <span>Information</span>
                                    <h2>Nous contacter</h2>
                                    <p>Questions et suggestions ? ou peut être une demande de devis ?</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>France</h4>
                                        <p>01 Avenue Galette du roi, 63 Clermont-Ferrand <br />+33 06 12 34 56</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact