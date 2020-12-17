import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/FrontEndComponents/Footer';
import '../css/About.css';
import Navbar from '../components/navbar.component';
import marchOfDimes from '../assets/charities/march-of-dimes-logo.png';
import sparks from '../assets/charities/sparks-logo.png'
import aChildsHope from '../assets/charities/a-childs-hope-logo.png';
import ronaldMcDonaldHouse from '../assets/charities/ronaldMcdonald-house-logo.png';
import wholeAgain from '../assets/charities/whole-again-logo.png';
import aboutImage1 from '../assets/downtown/aboutPageCincinnati1.png';
import courtneyhs from '../assets/about/courtney-hs.jpg';
import danielhs from '../assets/about/daniel-hs.jpg';
import derrickhs from '../assets/about/derrick-hs.jpg';
import jonathanhs from '../assets/about/jonathan-hs.jpg';

 const About = () => {
      useEffect(() => {
         Aos.init({duration: 1500});
      }, [])

      return (
            <div>
            {/* start of header section - cc */}
               <header id="header-about-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div data-aos="fade-down" className="header-about-text container text-justify">
                     <div className="line"></div>
                     <h1>About Us<br/><span>Cincinnati</span></h1>
                     <p>
                     Cincinnati is a city in Ohio, on the Ohio River.
                     The Over-the-Rhine district is known for its 19th-century architecture,
                     including Findlay Market, which has food and craft vendors. To the north is 
                     the Cincinnati Zoo & Botanical Garden. The Cincinnati Museum Center encompasses history,
                     science and children's museums in the art deco Union Terminal.
                     Works spanning 6,000 years are on display at the Cincinnati Art Museum.
                     </p>
                     <a href="#about"><button className="btn">Explore</button></a>
                  </div>
               </header>
               {/* end of header section - cc */}
               <div className="about container" id="about">
                  <div className="row">
                     <div data-aos="fade-right" className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Our</h2><br/>
                        <h1>Mission</h1> 
                        <p>It is our goal to give you every reason to come visit Cincinnati!
                        we aim to show you all the tourist hotspots and maybe some secret spots too!</p>
                     </div>
                     <div className="col-md-2 d-none d-sm-block"></div>
                     <div data-aos="fade-left" className="col-12 col-sm-12 col-md-4">
                        <div className="aboutImageBackground1 ml-5 float-sm-right"></div>
                        <div className="aboutImage mr-md-5 float-sm-right">
                           <img id="aboutImage1" src={aboutImage1} alt="About 1"/>
                        </div>
                     </div>
                  </div>
                  <div className="row mt-5">   
                     <div data-aos="fade-right" className="col-12 col-sm-12 col-md-6">
                        <div className="aboutImageBackground2"></div>
                        <div className="aboutImage ml-md-5" id="aboutImage2">
                           <img id="aboutUsImages" src={courtneyhs} alt="Courtney Headshot"/>
                           <img id="aboutUsImages" src={danielhs} alt="Daniel Headshot"/>
                           <img id="aboutUsImages" src={derrickhs} alt="Derrick Headshot"/>
                           <img id="aboutUsImages" src={jonathanhs} alt="Jonathan Headshot"/>
                        </div>
                     </div>
                     <div data-aos="fade-left" className="col-sm-12 col-md-6 mt-5">
                        <div className="line"></div>
                        <h2>Meet</h2><br/>
                        <h1>The Team</h1> 
                        <p>The team who brought you this project is Courtney, Daniel, Derrick, and Jonathan
                        a group of students from Kable Academy spread out internationally between Dayton, to Cincinnati
                        all the way to Chihuahua, Mexico!</p>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-in" className="row mt-5">   
                     <div className="col-md-12 charitiesBackground py-5 text-center">
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
export default About;