import React, { Component } from 'react';
import Footer from '../components/FrontEndComponents/Footer';
import '../css/About.css';
import Navbar from '../components/navbar.component';
import marchOfDimes from '../assets/charities/march-of-dimes-logo.png';
import sparks from '../assets/charities/sparks-logo.png'
import aChildsHope from '../assets/charities/a-childs-hope-logo.png';
import ronaldMcDonaldHouse from '../assets/charities/ronaldMcdonald-house-logo.png';
import wholeAgain from '../assets/charities/whole-again-logo.png';

 class About extends Component {
    render() {
        return (
            <div>
            {/* start of header section - cc */}
               <header id="header-about-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div className="header-about-text container">
                     <div className="line"></div>
                     <h1>About Us<br/><span>Cincinnati</span></h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                     </p>
                     <button className="btn">Explore</button>
                  </div>
               </header>
               {/* end of header section - cc */}
               <div className="about container mt-5">
                  <div className="row">
                     <div className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Our</h2><br/>
                        <h1>Mission</h1> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                           Nullam facilisis lorem in enim bibendum interdum. <br/>
                           Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                           eget ultrices est hendrerit.</p>
                     </div>
                     <div className="col-md-2 d-none d-sm-block"></div>
                     <div className="col-12 col-sm-12 col-md-4">
                        <div className="aboutImageBackground ml-5 float-sm-right"></div>
                        <div className="aboutImage mr-md-5 float-sm-right" id="aboutImage1"></div>
                     </div>
                  </div>
                  <div className="row mt-5">   
                     <div className="col-12 col-sm-12 col-md-4">
                        <div className="aboutImageBackground"></div>
                        <div className="aboutImage ml-md-5" id="aboutImage2"></div>
                     </div>
                     <div className="col-md-2 d-none d-sm-block"></div>
                     <div className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Meet</h2><br/>
                        <h1>The Team</h1> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                           Nullam facilisis lorem in enim bibendum interdum. <br/>
                           Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                           eget ultrices est hendrerit.</p>
                     </div>
                  </div>
               </div>
               <div className="row mt-5">   
                     <div className="col-md-12 charitiesBackground mt-5 py-5 text-center">
                        <h1>Explore Cincinnati Charities</h1>
                        <div className="d-inline-flex flex-column flex-md-row mt-5">
                           <div className="aboutLogosBackground mb-4 mb-md-0 mr-0 mr-md-4">
                              <a href="https://www.marchofdimes.org/">
                                    <img id="aboutLogos" src={marchOfDimes} alt="March of Dimes"/>
                              </a>
                           </div>
                           <div className="aboutLogosBackground mb-4 mb-md-0 mr-0 mr-md-4">
                              <a href="https://www.sparksfoundation.org/support-us/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpsemiNo_z0291QTu9j143jWLNWeTOtoVZCYEHYaxe0Nkz8JKrLtTugaAjKgEALw_wcB">
                                 <img id="aboutLogos" src={sparks} alt="sparks"/>
                              </a>
                           </div>
                           <div className="aboutLogosBackground mb-4 mb-md-0 mr-0 mr-md-4">
                              <a href="https://rmhc-centralohio.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptorRD_1Vt7lPKqNZGXhXynOGJaaRnFi9m0HMN3cb7DNIyqEkVNjDgaAiLlEALw_wcB">
                                 <img id="aboutLogos" src={ronaldMcDonaldHouse} alt="McDonalds"/>
                              </a>
                           </div>
                           <div className="aboutLogosBackground mb-4 mb-md-0 mr-0 mr-md-4">
                              <a href="https://www.achildshopefoundation.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpvOh5HEcgHlzCUOp3cQHkX97fhs5LWAmU9yiBjeNs71OXN1m-6SNOMaAsvZEALw_wcB">
                                 <img id="aboutLogos" src={aChildsHope} alt="ChildsHope"/>
                              </a>
                           </div>
                           <div className="aboutLogosBackground">
                              <a href="https://www.whole-again.org/">
                                 <img id="aboutLogos" src={wholeAgain} alt="Whole Again"/>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <Footer />
            </div>
        )
    }
}
export default About;