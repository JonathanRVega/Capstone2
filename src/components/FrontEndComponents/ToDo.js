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
                           There's plenty to do in Cincinnati,
                           everything from shopping, playing,
                           all the way to eating wonderful meals!
                     </p>   
                        <button className="btn">Shop</button>
                        <button className="btn">Eat</button>             
                        <button className="btn">Play</button>
                        </div>
                     
                    
                    
                </header>
               
                <section>
                     <div className="containerRow containerBackgroundBig">
                        <div className="containerColumn facts-text-box">
                            <div className="line"></div>
                               <h1 className="factsHeader">Explore<br/>The City Life</h1>
                               <p className="todoJustify">Cincinnati is a city in Ohio, on the Ohio River.
                                The Over-the-Rhine district is known for its 19th-century architecture, including Findlay Market,
                                 which has food and craft vendors. To the north is the Cincinnati Zoo & Botanical Garden.
                                 The Cincinnati Museum Center encompasses history, science and children's museums in the art deco Union Terminal.
                               Works spanning 6,000 years are on display at the Cincinnati Art Museum.
                               </p>
                              </div>

                              <div className="containerColumn">
                                 <div class="gallery">
                                 <figure class="gallery__item gallery__item--1">
                                    <img src={TokyoKitty} class="gallery__img" alt="Tokyo Kitty"></img>
                                 </figure>
                                 <figure class="gallery__item gallery__item--2">
                                    <img src={Taste} class="gallery__img" alt="Taste"></img>
                                 </figure>
                                 <figure class="gallery__item gallery__item--3">
                                    <img src={Waterview} class="gallery__img" alt="Waterview"></img>
                                 </figure>
                                 <figure class="gallery__item gallery__item--4">
                                    <img src={Zoo} class="gallery__img" alt="Zoo of Cincinnati"></img>
                                 </figure>
                                 <figure class="gallery__item gallery__item--6">
                                    <img src={Asm} class="gallery__img" alt="ASM"></img>
                                 </figure>
                                 </div>
                              </div>  
                        </div>                                                                            
                </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Shop<br/>The City Life</h1>
                        <p className="todoJustify">Shop, spend, treat yourself
                        at the finest stores in all of Ohio 
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
                     <img className="todo-img" src={ NadaOutside } alt="Great American Ball Park" />
                     </div>
                     <div className="containerColumn facts-text-box">
                     <div className="line"></div>
                     <h1 className="factsHeader">Eat<br/>The City Life</h1>
                     <p className="todoJustify">Come and check out some of the finest restruants in Cincinnati.
                            There's plenty of wonderful places to eat and drink!
                             If you have a taste for it, we have it here! 
                     </p>
                     </div>
                  </div>
                </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Play<br/>The City Life</h1>
                        <p className="todoJustify">Play and enjoy the city life
                                in the Queen City also known as
                                Cincinnati.
                        </p>
                        </div>
                     <div className="containerColumn">
                        <img className="todo-img" src={ TKGodzilla } alt="NadaExterior" />
                     </div>
               </div>
               </section>

           </div> 
        )
    }
} 

export default ToDo;