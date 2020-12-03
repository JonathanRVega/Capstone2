import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../index.css';
import Waterview from '../../assets/downtown/waterview.jpg';


 class ToDo extends Component {
    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line">
                        <h1>Things to do in<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe 
                            <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro 
                            <br/> saepe iure culpa.
                        </p>
                        </div>
                        <button className="btn">Shop</button>
                        <button className="btn">Eat</button>             
                        <button className="btn">Play</button>
                    </div>
                    
                </header>
               
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line">
            <h1>Explore<br/>The City Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>
            </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="row ">
                                <div className="col-lg-6 d-flex justify-content-end">
                                    <div className="box">
                                    <img src={ Waterview } alt="Cincinnati by River"/>
                                    </div>
                                    <div className="box">
                                   
                                    </div>
                                </div>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>




           
              
              <h2>Shop</h2>
             <br/>
            <h1>The City Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>


               <h2>Eat</h2>
             <br/>
            <h1>The City Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>


               <h2>Play</h2>
             <br/>
            <h1>The City Life</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
               Nullam facilisis lorem in enim bibendum interdum. <br/>
               Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
               eget ultrices est hendrerit.</p>


           </div> 
        )
    }
} 

export default ToDo;