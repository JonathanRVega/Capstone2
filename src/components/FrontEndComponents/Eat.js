import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../things.css'
import Arcade from '../../assets/food/16bit.jpg';
import Nada from '../../assets/nada/huge.jpg';
import Taste from '../../assets/food/taste.jpg';
import Rhinegiest from '../../assets/food/rhinegeist.jpg';


 class Eat extends Component {
    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Eat good food in<br/><span>Cincinnati</span></h1>
                        <p>
                            Come and check out some of the finest restruants in Cincinnati. <br/> 
                            There's plenty of wonderful places to eat and drink! <br/>
                             If you have a taste for it, we have it here! 
                        </p>   
                        <button className="btn">Shop</button>
                        <button className="btn">Eat</button>             
                        <button className="btn">Play</button>
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
                <section className="facts container">
                     <div className="row">
                     <div className="col-lg-6" id='smol'>
                        
                             <img className="eat-img" src={ Arcade } alt="16 Bit Arcade and Bar" />
                                    </div>      

                        <div className="col-lg-6 facts-text-box">
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


           </div> 
        )
    }
} 

export default Eat;