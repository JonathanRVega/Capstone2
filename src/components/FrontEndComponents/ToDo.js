import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../things.css'
import Waterview from '../../assets/downtown/waterview.jpg';
import NadaOutside from '../../assets/nada/Nada_Exterior.jpg';
import TKGodzilla from '../../assets/tokyokitty/godzilla.jpg';
import Reds from '../../assets/ballpark/reds.png';
import TokyoKitty from '../../assets/tokyokitty/484151.jpg';
import Taste from '../../assets/nada/large.jpg';
import Zoo from '../../assets/zoo/kangaroo.jpg';
import Asm from '../../assets/places/asm.jpg';

 class ToDo extends Component {
    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Things to do in<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>   
                        <button className="btn">Shop</button>
                        <button className="btn">Eat</button>             
                        <button className="btn">Play</button>
                        </div>
                     
                    
                    
                </header>
               
                <section className="facts container">
                     <div className="row container containerBackgroundBig">
                        <div className="col-lg-4 facts-text-box">
                            <div className="line"></div>
                               <h1>Explore<br/>The City Life</h1>
                               <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                                  Nullam facilisis lorem in enim bibendum interdum.
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                              <div className="col-8">
                              <div class="gallery">
                              <figure class="gallery__item gallery__item--1">
                                 <img src={TokyoKitty} class="gallery__img" alt="Image 1"></img>
                              </figure>
                              <figure class="gallery__item gallery__item--2">
                                 <img src={Taste} class="gallery__img" alt="Image 2"></img>
                              </figure>
                              <figure class="gallery__item gallery__item--3">
                                 <img src={Waterview} class="gallery__img" alt="Image 3"></img>
                              </figure>
                              <figure class="gallery__item gallery__item--4">
                                 <img src={Zoo} class="gallery__img" alt="Image 4"></img>
                              </figure>
                              <figure class="gallery__item gallery__item--6">
                                 <img src={Asm} class="gallery__img" alt="Image 6"></img>
                              </figure>
                              </div>
                              </div>  
                              </div>                                                                            
                </section>


                <section className="facts container">
                     <div className="row containerBackground">
                     

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="todo-img" src={ Reds } alt="Great American Ball Park" />
                                    </div>  

                                         <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Shop<br/>The City Life</h1>
                               <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                                  Nullam facilisis lorem in enim bibendum interdum.
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                                  eget ultrices est hendrerit.
                               </p>
                              </div>                            
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row containerBackground">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Eat<br/>The City Life</h1>
                               <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                                  Nullam facilisis lorem in enim bibendum interdum.
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="todo-img" src={ NadaOutside } alt="Nada Exterior" />
                                    </div>                                
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row containerBackground">
                       
                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="todo-img" src={ TKGodzilla } alt="Karoke Room at Tokyo Kitty" />
                                    </div> 

                                      <div className="col-lg-6 facts-text-box">
                              
                            <div className="line"></div>
                               <h1>Play<br/>The City Life</h1>
                               <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                                  Nullam facilisis lorem in enim bibendum interdum.
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                                  eget ultrices est hendrerit.
                               </p>
                        </div>
                              
                     </div>                                           
                </section>


           </div> 
        )
    }
} 

export default ToDo;