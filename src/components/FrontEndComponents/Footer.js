import React, { Component } from 'react'
import Logo from '../../assets/logo/new-logo.png';
import Facebook from '../../assets/social/facebook.png';
import Instagram from '../../assets/social/instagram.png';
import Youtube from '../../assets/social/youtube.png';
import Twitter from '../../assets/social/twitter.png';
import '../../css/Footer.css'



 class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-12-lg icons-container">
                                <i class="fab fa-twitter-square" ></i>
                                <i class="fab fa-instagram-square" ></i>
                                <i class="fab fa-facebook-square" ></i>
                                <i class="fab fa-youtube-square" ></i>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-12-lg logo-container">
                             <div className="navbar-brand">
                                <img className="logo" src={Logo} alt="logo"/>
                            </div>
                        </div>
                        </div>
                        <div className="text-container text-center text-white">
                            <p>Explore Cincinnati</p>
                            <p>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;