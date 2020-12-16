import React, { Component } from 'react'
import CreateMail from './create-mail.component'
import Navbar from "../components/navbar.component";
import Footer from "../components/FrontEndComponents/Footer";
import '../css/contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                {/* start of header section - cc */}
                <header id="header-contact-section">

                    {/* navbar component */}
                    <Navbar />
                    <div className="header-text-contact-container container text-justify">
                        <div className="line"></div>
                        <h1>Explore<br/><span>Cincinnati</span></h1>
                        <p>
                        Exploring Cincinnati can feel like a brand new
                            journey each time you visit!
                             Discover something new, like local breweries, new animals at the zoo
                            or even your new favorite art piece!
                        </p>
                    </div>
                </header>
                {/* end of header section - cc */}
                <CreateMail />
                <Footer />
            </div>
        )
    }
}
