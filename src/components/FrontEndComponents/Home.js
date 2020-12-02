import React, { Component } from 'react'
import '../../index.css'

export default class Home extends Component {
    render() {
        return (
            // <div>
                <header id="header-section">
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Explore<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>
                        <button className="btn">Explore</button>
                    </div>
                </header>
            // </div>
        )
    }
}
