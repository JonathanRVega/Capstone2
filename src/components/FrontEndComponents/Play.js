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
               
                <section>
                  <div className="containerRow containerBackground">
                     <div className="containerColumn">
                     <img className="todo-img" src={ Tokyo } alt="Great American Ball Park" />
                     </div>
                     <div className="containerColumn facts-text-box">
                     <div className="line"></div>
                     <h1 className="factsHeader">Play at<br/>Tokyo Kitty</h1>
                     <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                        Nullam facilisis lorem in enim bibendum interdum.
                        Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                        eget ultrices est hendrerit.
                     </p>
                     </div>
                  </div>
                </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Play at<br/>The Great American Ball Park</h1>
                        <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                           Nullam facilisis lorem in enim bibendum interdum.
                           Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                           eget ultrices est hendrerit.
                        </p>
                        </div>
                     <div className="containerColumn">
                        <img className="todo-img" src={ Reds } alt="NadaExterior" />
                     </div>
               </div>
                </section>

                <section>
                  <div className="containerRow containerBackground">
                     <div className="containerColumn">
                     <img className="todo-img" src={ Taft } alt="Great American Ball Park" />
                     </div>
                     <div className="containerColumn facts-text-box">
                     <div className="line"></div>
                     <h1 className="factsHeader">Play at<br/>The Taft Museum of Art</h1>
                     <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                        Nullam facilisis lorem in enim bibendum interdum.
                        Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                        eget ultrices est hendrerit.
                     </p>
                     </div>
                  </div>
                </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Play at<br/>The Cincinnati Zoo</h1>
                        <p className="todoJustify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.
                           Nullam facilisis lorem in enim bibendum interdum.
                           Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis,
                           eget ultrices est hendrerit.
                        </p>
                        </div>
                     <div className="containerColumn">
                        <img className="todo-img" src={ Zoo } alt="NadaExterior" />
                     </div>
               </div>
                </section>

                <section>
                   <div className="iconsRow">
                     <div className="iconsContainer">
                        <p>hello</p>
                     </div>
                     <div className="iconsContainer">
                        <p>hello</p>
                     </div>
                     <div className="iconsContainer">
                        <p>hello</p>
                     </div>
                     <div className="iconsContainer">
                        <p>hello</p>
                     </div>
                   </div>

                   <div className="ImageIconsContainer">

                   </div>
                </section>
           </div> 
        )
    }
} 

export default Play;