import React, { Component } from 'react'
import Logo from '../../assets/logo/Capstone logo-01.png';
import Facebook from '../../assets/social/facebook.png';
import Instagram from '../../assets/social/instagram.png';
import Youtube from '../../assets/social/youtube.png';
import Twitter from '../../assets/social/twitter.png';
 class Footer extends Component {
    render() {
        return (
            <div>
            <div className="icons">
            <img src={ Facebook } alt="Facebook" />
            <img src={ Instagram } alt="Instagram" />
            <img src={ Youtube } alt="Youtube" />
            <img src={ Twitter } alt="Twitter" />
            </div>

            <div className="center icons">
                    <div className="navbar-brand">
                        <img src={Logo} alt="logo"/>
                    </div>
            <div className="line"></div>
                <h1><span>Explore Cincinnati</span></h1>
            </div>


            <span>
            <p>Terms & Conditions | Privacy Policy</p>
            </span>
            </div>
        )
    }
}

export default Footer;