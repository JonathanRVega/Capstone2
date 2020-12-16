import React, { useEffect } from 'react';
import Navbar from "../navbar.component";
import '../../css/Eat.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Arcade from '../../assets/food/16bit.jpg';
import Nada from '../../assets/food/nada.jpg';
import Taste from '../../assets/food/taste.jpg';
import FoodPoster from '../../assets/food/eats5.png';
import Footer from '../FrontEndComponents/Footer'


 const Eat = () => {
   // animate on scroll - cc 
   useEffect(() => {
      Aos.init({duration: 1500});
   }, [])

        return (
            <div>
              <header id="header-eat-section">
                    <Navbar />
                    <div className="header-eat-text-container container">
                        <div className="line"></div>
                        <h1>Eat Good In<br/><span>Cincinnati</span></h1>
                        <p>
                           Come and check out some of the finest restruants in Cincinnati. 
                           There's plenty of wonderful places to eat and drink! 
                           If you have a taste for it, we have it here! 
                        </p>   
                     </div>
               </header>
               
                <section data-aos="fade-up" className="place-to-eat-section container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 img mb-4 d-flex justify-content-center">
                        <img src={FoodPoster} alt="bourbon country bbq" />
                     </div>
                     <div className="col-lg-6 col-md-12 text mt-4">
                        <p>
                        Many Chicagoans aren't aware of how close they are to another of the Midwest’s most vibrant and historic cities. In less than five hours via car, you can be in Cincinnati, a city filled with destination dining. Perched along the Ohio River on the Kentucky border, Cincinnati was poised to become the Midwestern mega-city until train lines were routed primarily through Chicago. But that hasn’t stopped the Ohio city from booming in its own right, especially when it comes to restaurants and bars, thanks to its bountiful location in the heart of America’s breadbasket and at the edge of bourbon country. Well worth the day trip or weekend excursion, here are nine must-try restaurants and bars in Cincinnati.<a href="https://www.zagat.com/b/9-must-try-restaurants-in-cincinnati"> Read More</a>
                        </p>
                     </div>
                  </div>                                                        
                </section>

                <h2 data-aos="fade-in" className="text-center title">Some of our favorite places</h2>
                <section data-aos="fade-right" className="eats-section">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center order-md-2 order-lg-1">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>16 Bit Arcade</span></h2>
                           <p>
                              16-Bit Bar+Arcade redefines how a night out is best played. With a name coined from the computer architecture that several of our 50+ vintage arcade
                              cabinets were built on, 16-Bit appeals to those looking for an alternative to the monotonous. From bar-going veterans to young  open-minded, beer-centric types 
                              to arcade game novices and enthusiasts, the nostalgic and playful vibe is for players of all types.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center order-md-1 order-lg-2 mt-4">
                        <img src={ Arcade } alt="16 Bit Arcade and Bar" />
                     </div> 
                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-left" className="eats-section eat-right">
                  <div className="row eats-container">
                     <div className="col-lg-6 img d-flex justify-content-center mb-4">
                        <img src={ Taste } alt="Taste of Cincinnati" />
                     </div> 
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>Taste Of Cincinnati</span></h2>
                           <p>
                              Nothing has more appeal than a festival that promises a wide selection of food in a concentrated space.
                              Being that it’s also the longest running culinary arts festival in the country –
                              with 500,000 people attending each year – it practically screams foodie happiness.
                           </p>
                     </div>                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-right" className="eats-section d-inline-block">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center order-md-2 order-lg-1">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>Nada</span></h2>
                           <p>
                              We believe in the power of beer to bring great people together, foment fantastic ideas,
                               and build a community that values craft beer and one another. Rhinegeist means "Ghost of the Rhine," and refers to our place here in the historic
                               Over-the-Rhine neighborhood of Cincinnati. Within these unique and historic walls, we brew batches of beer that sing with flavor.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center order-md-1 order-lg-2 mt-4">
                        <img src={ Nada } alt="Nada Restaurant" />
                     </div>                                     
                  </div>                                           
                </section>
                <Footer />
               </div> 
        )
    
} 

export default Eat;