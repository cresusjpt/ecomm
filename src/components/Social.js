import social from '../assets/images/instagram-1.jpg'
import social1 from '../assets/images/instagram-2.jpg'
import social2 from '../assets/images/instagram-3.jpg'
import social3 from '../assets/images/instagram-4.jpg'
import social4 from '../assets/images/instagram-5.jpg'
import social5 from '../assets/images/instagram-6.jpg'
function Social(){
    return (
        <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <img className="instagram__pic__item set-bg" src={social} alt="social pic" ></img>
                        <img className="instagram__pic__item set-bg" src={social1} alt="social pic" ></img>
                        <img className="instagram__pic__item set-bg" src={social2} alt="social pic" ></img>
                        <img className="instagram__pic__item set-bg" src={social3} alt="social pic" ></img>
                        <img className="instagram__pic__item set-bg" src={social4} alt="social pic" ></img>
                        <img className="instagram__pic__item set-bg" src={social5} alt="social pic" ></img>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Profil</h2>
                        <p>Ceci est une page de profil fait en react</p>
                        <h3>#Dev_isCool</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Social