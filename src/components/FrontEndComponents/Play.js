import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../things.css'
import Tokyo from '../../assets/tokyokitty/mainroom.jpg';
import Taft from '../../assets/taft/gallery.jpg';
import Zoo from '../../assets/zoo/kangaroo.jpg';
import Reds from '../../assets/ballpark/ballgame.jpg';


 class Play extends Component {
    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Have fun in<br/><span>Cincinnati</span></h1>
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
                               <h1>Play at<br/>Tokyo Kitty</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="play-img" src={ Tokyo } alt="Tokyo Kitty" />
                                    </div>                                
                                </div>                               
                                                                              
                </section>
                <section className="facts container">
                     <div className="row">
                     <div className="col-lg-6" id='smol'>
                        
                             <img className="play-img" src={ Reds } alt="Great American Ball Park" />
                                    </div>      

                        <div className="col-lg-6 facts-text-box">
                           <div className="line"></div>
                               <h1>Play at<br/>The Great American Ball Park</h1>
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
                               <h1>Play at<br/>The Taft Museum of Art</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="play-img" src={ Taft } alt="Gallery in Taft" />
                                    </div>                                
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                       
                        <div className="col-lg-6" id='smol'>
                                 <img className="play-img" src={ Zoo } alt="Kangaroo being fed" />
                                    </div>    
                                    <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Play at<br/>The Cincinnati Zoo</h1>
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

export default Play;