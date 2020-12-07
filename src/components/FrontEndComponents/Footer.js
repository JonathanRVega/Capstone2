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
                <div className="text-center">
                    <img className="icons" src={ Facebook } alt="Facebook" />
                    <img className="icons" src={ Instagram } alt="Instagram" />
                    <img className="icons" src={ Youtube } alt="Youtube" />
                    <img className="icons" src={ Twitter } alt="Twitter" />
                </div>

                <div className="center icons">
                        <div className="navbar-brand">
                            <img className="icons" src={Logo} alt="logo"/>
                        </div>
                <div className="line text-center"></div>
                <h1 className="text-center"><span>Explore Cincinnati</span></h1>
            </div>


                <span>
                    <p className="text-center">Terms & Conditions | Privacy Policy</p>
                </span>
            </div>
        )
    }
}

export default Footer;