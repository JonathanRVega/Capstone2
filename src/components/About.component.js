import React, { Component } from 'react';
import '../css/About.css';
import Navbar from '../components/navbar.component';

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
            <div>
            <h2>About Us</h2><br/>
               <h1>Cincinnati</h1> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>
            
            
            
            <h2>Our</h2><br/>
               <h1>Mission</h1> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>
            
            
            
            <h2>Meet</h2><br/>
               <h1>The Team</h1> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>



               <h2>Explore Cincinnati Charities</h2>
               <a href="https://www.marchofdimes.org/">March Of Dimes</a>
               <a href="https://www.sparksfoundation.org/support-us/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpsemiNo_z0291QTu9j143jWLNWeTOtoVZCYEHYaxe0Nkz8JKrLtTugaAjKgEALw_wcB">S.P.A.R.K.S</a>
               <a href="https://rmhc-centralohio.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptorRD_1Vt7lPKqNZGXhXynOGJaaRnFi9m0HMN3cb7DNIyqEkVNjDgaAiLlEALw_wcB">Ronald Mcdonald <br/>
               House</a>
               <a href="https://www.achildshopefoundation.org/?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpvOh5HEcgHlzCUOp3cQHkX97fhs5LWAmU9yiBjeNs71OXN1m-6SNOMaAsvZEALw_wcB">A Child's Hope</a>
               <a href="https://www.whole-again.org/">Whole Again</a>
            </div>
            </div>
        )
    }
}
export default About;