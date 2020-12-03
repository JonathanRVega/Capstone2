import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../index.css';
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
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
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
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
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>
                                                             
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Eat at<br/>The Taste of Cincinnati</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
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
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>                             
                                </div>                                           
                </section>


           </div> 
        )
    }
} 

export default Eat;