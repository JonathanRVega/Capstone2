import React, { useEffect } from 'react';
import Navbar from "../navbar.component";
import '../../css/Eat.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Arcade from '../../assets/food/16bit.jpg';
import Nada from '../../assets/food/nada.jpg';
import Taste from '../../assets/food/taste.jpg';
import Rhinegiest from '../../assets/food/rhinegeist.jpg';
import FoodPoster from '../../assets/food/eats5.png';


 const Eat = () => {
   // animate on scroll - cc 
   useEffect(() => {
      Aos.init({duration: 1500});
   }, [])

        return (
            <div>
              <header id="header-eat-section">
                    <Navbar />
                    <div className="header-eat-text-container container">
                        <div className="line"></div>
                        <h1>Eat Good In<br/><span>Cincinnati</span></h1>
                        <p>
                            Come and check out some of the finest restruants in Cincinnati. <br/> 
                            There's plenty of wonderful places to eat and drink! <br/>
                             If you have a taste for it, we have it here! 
                        </p>   
                     </div>
               </header>
               
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Eat at<br/>Nada</h1>
                               <p>There is much ado about Nada, and for good reason. Nada has a great vibe, <br/>
                               and serves up some of the finest Mexican cuisine to be had in the Queen City <br/>
                               (not to mention offers a lengthy beer list & a number of margarita options).<br/>
                                During the summer months, the patio is a great place to enjoy pork belly tacos and a Modelo Especial.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="eat-img" src={ Nada } alt="Nada's Enterance" />
                                    </div>                                
                                </div>                               
                                                                              
                </section>

                <h2 data-aos="fade-in" className="text-center title">Some of our favorite places</h2>
                <section data-aos="fade-right" className="eats-section">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                               <h1>Eat at<br/>The 16 Bit Arcade</h1>
                               <p>16-Bit Bar+Arcade redefines how a night out is best played. With a name coined from the computer architecture that several of our 50+ vintage arcade <br/>
                               cabinets were built on, 16-Bit appeals to those looking for an alternative to the monotonous. From bar-going veterans to young open-minded, beer-centric types,<br/> 
                               to arcade game novices and enthusiasts, the nostalgic and playful vibe is for players of all types. <br/>
                               The time has come to relive your childhood and party like it’s 1999, or 1989 for that matter.
                               </p>
                              </div>
                                                             
                  </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Eat at<br/>The Taste of Cincinnati</h1>
                               <p>Nothing has more appeal than a festival that promises a wide selection of food in a concentrated space. <br/>
                               Being that it’s also the longest running culinary arts festival in the country – <br/>
                                with 500,000 people attending each year – it practically screams foodie happiness.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="eat-img" src={ Taste } alt="Taste of Cincinnati" />
                                    </div>                                
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                       
                        <div className="col-lg-6" id='smol'>
                                 <img className="eat-img" src={ Rhinegiest } alt="Rhinegiest Brewery" />
                                    </div>    
                                    <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Drink at<br/>Rhinegiest</h1>
                               <p>We believe in the power of beer to bring great people together, foment fantastic ideas, <br/>
                               and build a community that values craft beer and one another. Rhinegeist means "Ghost of the Rhine," and refers to our place here in the historic <br/>
                               Over-the-Rhine neighborhood of Cincinnati. Within these unique and historic walls, we brew batches of beer that sing with flavor.
                               </p>
                              </div>                             
                                </div>                                           
                </section>

                <section data-aos="fade-right" className="eats-section d-inline-block">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>Nada</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Nada } alt="Nada Restaurant" />
                     </div>                                     
                  </div>                                           
                </section>
               </div> 
        )
    
} 

export default Eat;