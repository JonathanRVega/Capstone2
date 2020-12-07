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
                    <div className="header-text-contact-container container">
                        <div className="line"></div>
                        <h1>Explore<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
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
