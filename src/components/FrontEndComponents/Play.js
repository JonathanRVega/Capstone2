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
                        Play and enjoy the city life <br/>
                                in the Queen City also known as <br/>
                                Cincinnati.
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
                               <p>Tokyo Kitty is a local karaoke hot spot in the heart of downtown Cincinnati. <br/>
                               As you walk in there is a stocked bar in a large room featuring a stage, big screens with the lyrics and a host. The guests picked songs, <br/>
                               sang along on mics and so did the people in the room creating a vibrant atmosphere. <br/>
                               They also feature private rooms for rental.
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
                               <p>Great American Ball Park is a baseball stadium in Cincinnati, Ohio, <br/>
                                which is the home field of Major League Baseball's Cincinnati Reds.<br/>
                                It opened in 2003, replacing Cinergy Field, their home field from 1970 to 2002. <br/>
                                The park's name comes from Great American Insurance Group
                               </p>
                              </div>
                                                             
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Play at<br/>The Taft Museum of Art</h1>
                               <p>Built in 1820 by Martin Baum, a merchant and Cincinnati's first millionaire, <br/>
                               the house is a registered National Historic Landmark. The House was the home of Cincinnati's leading citizens for several generations.<br/>
                                Among them was arts patron Nicholas Longworth, who hired African-American painter Robert S. Duncanson <br/>
                               to paint eight landscape murals considered one of the finest suites of domestic murals dating from before the Civil War.
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
                               <p>The Cincinnati Zoo & Botanical Garden is the sixth-oldest zoo in the United States, <br/>
                                opening in 1873, after the Roger Williams Park Zoo. <br/>
                                 It is located in the Avondale neighborhood of Cincinnati, Ohio.
                               </p>
                              </div>                             
                                </div>                                           
                </section>


           </div> 
        )
    }
} 

export default Play;