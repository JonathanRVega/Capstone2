import React, { Component } from 'react'
import AttractionList from './attractions-list.component';
import CreateAttraction from './create-attraction.component';
import Navbar from './navbar.component';
import OverTheRhine from '../assets/food/16bit.jpg';
import '../css/Blog.css'


class Blogs extends Component {
    render() {
        return (
            <div className="App">
                {/* start of header section - cc */}
               <header id="header-blog-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div className="header-blog-text container text-center">
                     <div className="line"></div>
                     <h1>The<br/><span>Latest News</span></h1>
                     <p>
                        Come get the Latest News about Cincinnati, <br/>
                        it's locals, tourist spots, eateries, <br/>
                        breweries, and so so much more!    
                     </p>
                  </div>
               </header>
                {/* end of header section - cc */}

                 {/* start of blog section - cc */}
               <section className="blog-section container">
                    <div className="blog-article-container text-center">
                        <div className="line"></div>
                        <h2>Featured Post</h2>
                        <article>
                            <p className="blog-title">Over The Rhine</p>
                            <p className="blog-author"><i>By Sara Davidson - November 30, 2020</i></p>
                            <img className="imageResponsive" src={ OverTheRhine } alt="Over The Rine"/>
                            <div className="content">
                                <p className="letter">E</p>
                                <p className="text">
                                Well-preserved 19th-century buildings pepper historic Over-the-Rhine,<br/>
                                 a onetime working-class German neighborhood now home to craft breweries,<br/>
                                  hip gastropubs, and trendy bars. Dating from the 1850s,<br/>
                                   Findlay Market bustles with indoor specialty grocers and a weekend farmers’ market. <br/>
                                   The city’s symphony orchestra plays at the grand Cincinnati Music Hall, and <br/>
                                   Washington Park is popular for its fountains and festivals. 
                                     <a href=""> Read More</a>
                                </p>
                            </div>
                        </article>
                        <hr/>
                    </div>
               </section>
             {/* end of blog section - cc */}
            <CreateAttraction />
            <AttractionList />
            </div>
        )
    }
}

export default Blogs;