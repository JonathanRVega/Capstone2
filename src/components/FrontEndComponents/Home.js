import React, { Component } from 'react'
import Navbar from "../navbar.component";
import '../../index.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* start of header section - cc */}
                <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Explore<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>
                        <button className="btn">Explore</button>
                    </div>
                </header>
                {/* end of header section - cc */}

                {/* start of facts section - cc */}
                <section className="facts container">
                    <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <h2>Here's<br/><span>Some Facts</span></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam ducimus, ratione aut eveniet facere tenetur veritatis assumenda ipsum accusamus!
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <img src="" alt="Attractions icon"/>
                                    <h5 className="icon-title">Attractions</h5>
                                </div>
                                <div className="col-lg-6">
                                    <img src="" alt="Hotels icon"/>
                                    <h5 className="icon-title">Hotels</h5>
                                </div>
                                <div className="col-lg-6">
                                    <img src="" alt="Population icon"/>
                                    <h5 className="icon-title">Population</h5>
                                </div>
                                <div className="col-lg-6">
                                    <img src="" alt="Restaurants icon"/>
                                    <h5 className="icon-title">Restaurants</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end of facts section - cc */}
            </div>
        )
    }
}
