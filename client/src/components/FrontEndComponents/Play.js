import React, { Component } from 'react';
import Navbar from "../navbar.component";
import Footer from '../FrontEndComponents/Footer';
import '../../things.css'
import Tokyo from '../../assets/tokyokitty/mainroom.jpg';
import Taft from '../../assets/taft/gallery.jpg';
import Zoo from '../../assets/zoo/kangaroo.jpg';
import Reds from '../../assets/ballpark/ballgame.jpg';
import Tokyo1 from '../../assets/play/Tokyo1.jpg';
import Taft1 from '../../assets/play/Taft1.jpg';
import Zoo1 from '../../assets/play/Zoo1.jpg';
import Reds1 from '../../assets/play/GABP1.jpg';
import IconTokyo from '../../assets/logo/tklogo-01.png';
import IconTaft from '../../assets/logo/taftlogo-01.png';
import IconZoo from '../../assets/logo/zoologo-01.png';
import IconReds from '../../assets/logo/redslogo-01.png';

 class Play extends Component {

    after(){ 
      document.getElementById('myImage') 
      .src=Tokyo1; 
      document.getElementById('message') 
      .innerHTML="Tokyo Kitty is a local karaoke hot spot in the heart of downtown Cincinnati. As you walk in there is a stocked bar in a large room featuring a stage, big screens with the lyrics and a host."; 
      document.getElementById('title') 
      .innerHTML="Tokyo Kitty"; 
  } 

  after2(){ 
   document.getElementById('myImage') 
   .src=Reds1; 
   document.getElementById('message') 
   .innerHTML="Great American Ball Park is a baseball stadium in Cincinnati, Ohio, which is the home field of Major League Baseball's Cincinnati Reds. It opened in 2003, replacing Cinergy Field, their home field from 1970 to 2002."; 
   document.getElementById('title') 
   .innerHTML="Great American Ball Park"; 
} 

after3(){ 
   document.getElementById('myImage') 
   .src=Taft1; 
   document.getElementById('message') 
   .innerHTML="Built in 1820 by Martin Baum, a merchant and Cincinnati's first millionaire, the house is a registered National Historic Landmark. The House was the home of Cincinnati's leading citizens for several generations."; 
   document.getElementById('title') 
   .innerHTML="Taft Museum of Art"; 
} 

after4(){ 
   document.getElementById('myImage') 
   .src=Zoo1; 
   document.getElementById('message') 
   .innerHTML="The Cincinnati Zoo & Botanical Garden is the sixth-oldest zoo in the United States, opening in 1873, after the Roger Williams Park Zoo. It is located in the Avondale neighborhood of Cincinnati, Ohio."; 
   document.getElementById('title') 
   .innerHTML="Cincinnati Zoo"; 
} 

    render() {
        return (
            <div>
              <header id="header-section">
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Have fun in<br/><span>Cincinnati</span></h1>
                        <p>
                        Play and enjoy the city life
                                in the Queen City also known as
                                Cincinnati.
                        </p>   
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
                     <p className="todoJustify">Tokyo Kitty is a local karaoke hot spot in the heart of downtown Cincinnati.
                               As you walk in there is a stocked bar in a large room featuring a stage, big screens with the lyrics and a host. The guests picked songs,
                               sang along on mics and so did the people in the room creating a vibrant atmosphere.
                               They also feature private rooms for rental.
                     </p>
                     </div>
                  </div>
               </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Play at<br/>The Great American Ball Park</h1>
                        <p className="todoJustify">Great American Ball Park is a baseball stadium in Cincinnati, Ohio,
                                which is the home field of Major League Baseball's Cincinnati Reds.
                                It opened in 2003, replacing Cinergy Field, their home field from 1970 to 2002.
                                The park's name comes from Great American Insurance Group
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
                     <p className="todoJustify">Built in 1820 by Martin Baum, a merchant and Cincinnati's first millionaire,
                               the house is a registered National Historic Landmark. The House was the home of Cincinnati's leading citizens for several generations.
                                Among them was arts patron Nicholas Longworth, who hired African-American painter Robert S. Duncanson
                               to paint eight landscape murals considered one of the finest suites of domestic murals dating from before the Civil War.
                     </p>
                     </div>
                  </div>
                </section>

                <section>                                        
                  <div className="containerRow containerBackground">
                     <div className="containerColumn facts-text-box">
                        <div className="line"></div>
                        <h1 className="factsHeader">Play at<br/>The Cincinnati Zoo</h1>
                        <p className="todoJustify">The Cincinnati Zoo & Botanical Garden is the sixth-oldest zoo in the United States,
                                opening in 1873, after the Roger Williams Park Zoo.
                                 It is located in the Avondale neighborhood of Cincinnati, Ohio.
                        </p>
                        </div>
                     <div className="containerColumn">
                        <img className="todo-img" src={ Zoo } alt="NadaExterior" />
                     </div>
               </div>
               </section>

                <section>
                <div className="iconsBorder">
                   <div className="iconsRow" >
                     <div className="iconsContainer" onClick={this.after}>
                     <img className="iconsPlay" src={IconTokyo} alt="Tokyo Icon"></img>
                        <p className="iconsText">Tokyo Kitty</p>
                     </div>
                     <div className="iconsContainer" onClick={this.after2}>
                     <img className="iconsPlay" src={IconReds} alt="Reds Icon"></img>
                        <p className="iconsText">The Great American Ball Park</p>
                     </div>
                     <div className="iconsContainer" onClick={this.after3}>
                     <img className="iconsPlay" src={IconTaft} alt="Taft Icon"></img>
                        <p className="iconsText">The Taft Museum of Art</p>
                     </div>
                     <div className="iconsContainer" onClick={this.after4}>
                     <img className="iconsPlay" src={IconZoo} alt="Zoo Icon"></img>
                        <p className="iconsText">Cincinnati Zoo</p>
                     </div>

                   </div>
                   </div>

                   <div className="backgroundImageContainer">
                   <div className="ImageIconsContainer">
                     <img id="myImage" src={Tokyo1} className="ImagesPlay" alt="Tokyo Kitty"></img>
                     <div className="card-info">
                        <div className="text-box ">
                            <h3 id="title">Tokyo Kitty</h3>
                            <p id="message">Tokyo Kitty is a local karaoke hot spot in the heart of downtown Cincinnati.
                               As you walk in there is a stocked bar in a large room featuring a stage, big screens with the lyrics and a host.</p>
                        </div>
                    </div>
                     </div>
                   </div>
                </section>
                <Footer />
           </div> 
        )
    }
} 

export default Play;