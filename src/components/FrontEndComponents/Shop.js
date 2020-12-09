import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../css/shop.css'
import Art from '../../assets/places/contempArt.jpg';
import AMS from '../../assets/places/asm.jpg';
import Downtown from '../../assets/downtown/downtown.jpg';
import Bengels from '../../assets/places/paulbrownstadium.jpg';
import Footer from '../FrontEndComponents/Footer'


const Shop = () => {
   return (
      <div>
         <header id="header-shop-section">
            <Navbar />
            <div className="header-shop-text-container container">
               <div className="line"></div>
               <h1>Eat Good In<br/><span>Cincinnati</span></h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
               </p>   
            </div>
         </header>

         <section className="shopping-section">
            <div className="container">
               <div className="shop-grid">
                  <div className="box1">
                     <h3>1</h3>
                  </div>
                  <div className="box2">
                     <h3>2</h3>
                  </div>
                  <div className="box3">
                     <h3>3</h3>
                  </div>
                  <div className="box4">
                     <h3>4</h3>
                  </div>
                  <div className="box5">
                     <h3>5</h3>
                  </div>
                  <div className="box6">
                     <h3>6</h3>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </div>
   )
}

export default Shop;