import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../things.css'
import Art from '../../assets/places/contempArt.jpg';
import AMS from '../../assets/places/asm.jpg';
import Downtown from '../../assets/downtown/downtown.jpg';
import Bengels from '../../assets/places/paulbrownstadium.jpg';


 class Shop extends Component {
    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Spend money in<br/><span>Cincinnati</span></h1>
                        <p>
                        Shop, spend, treat yourself <br/>
                        at the finest stores in all of Ohio 
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
                               <h1>Visit<br/>The Contempary Art Museum</h1>
                               <p>The Contemporary Arts Center is a contemporary art museum in Cincinnati, Ohio <br/>
                               and one of the first contemporary art institutions in the United States. <br/>
                               The CAC is a non-collecting museum that focuses on new developments in painting, sculpture, photography, architecture, <br/>
                               performance art and new media
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="shop-img" src={ Art } alt="Outside the Contempary Art" />
                                    </div>                                
                                </div>                               
                                                                              
                </section>
                <section className="facts container">
                     <div className="row">
                     <div className="col-lg-6" id='smol'>
                        
                             <img className="shop-img" src={ Bengels } alt="Inside Paul Brown Stadium" />
                                    </div>      

                        <div className="col-lg-6 facts-text-box">
                           <div className="line"></div>
                               <h1>Visit<br/>Paul Brown Stadium</h1>
                               <p>Paul Brown Stadium is an outdoor football stadium in Cincinnati, Ohio.<br/>
                                It is the home venue of the Cincinnati Bengals of the National Football League and opened on August 19, 2000.
                               </p>
                              </div>
                                                             
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Visit<br/>The American Sign Museum</h1>
                               <p>The American Sign Museum in Cincinnati, Ohio, preserves, archives, and displays a collection of signs.<br/>
                                The museum also displays the equipment utilized in the design and manufacture of signs. <br/>
                                Tod Swormstedt began working on the museum in 1999. It opened to the public in 2005.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="shop-img" src={ AMS } alt="American Sign Museum" />
                                    </div>                                
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                       
                        <div className="col-lg-6" id='smol'>
                                 <img className="shop-img" src={ Downtown } alt="Downtown Cincinnati" />
                                    </div>    
                                    <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Visit<br/>Downtown</h1>
                               <p>Downtown Cincinnati contains the central business district of Cincinnati, Ohio, as well as a number of urban <br/>
                               neighborhoods in the low land area between the Ohio River and the high land areas of uptown. <br/>
                                These neighborhoods include Over-the-Rhine, Pendleton, Queensgate, and West End. 
                               </p>
                              </div>                             
                                </div>                                           
                </section>


           </div> 
        )
    }
} 

export default Shop;