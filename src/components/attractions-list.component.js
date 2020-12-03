import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar.component';

const Attraction = props => (
    <tr>
      <td>{props.attraction.name}</td>
      <td>{props.attraction.description}</td>
      <td>{props.attraction.address}</td>
      <td>{props.attraction.zipcode}</td>
      <td>{props.attraction.website}</td>
    </tr>
  )

export default class AttractionList extends Component {
    constructor(props) {
        super (props);

		this.state = {attractions: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/attractions')
        .then(response => {
            this.setState({ attractions: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    attractionList() {
        return this.state.attractions.map(currentattraction => {
          return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
        })
	  }
	  
    render() {
        return (
            <div>
			<Navbar/>
              <h3>Logged Attractions</h3>
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>Zipcode</th>
                    <th>website</th>
                </tr>
                </thead>
                <tbody>
                { this.attractionList() }
                </tbody>
            </table>

    <div class="container">
	<div class="row">
		<div class="col">
			<div class="weather-card one">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Tokyo Kitty</h1>
						<h3 class="location">84.51 building, 575 Race St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Cool Japanese-style karaoke bar with cocktails, dancing & private rooms with lounge seating.</p>
							<p className="cardText">Website: <span><a href="">https://thattokyobar.com/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card two">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Nada</h1>
						<h3 class="location">1331 Walnut St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
					<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Trendy Mexican cantina with outdoor seating, festive cocktails & upscale fare in a chic setting.</p>
							<p className="cardText">Website: <span><a href="">https://www.eatdrinknada.com/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card three">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">16-Bit Bar+Arcade</h1>
						<h3 class="location">1331 Walnut St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Unleash your inner child at this retro watering hole with classic arcade cabinets, nostalgia & kick-ass adult beverages.</p>
							<p className="cardText">Website: <span><a href="">http://www.16-bitbar.com/cincy</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card four">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Rhinegeist Brewery</h1>
						<h3 class="location">1910 Elm St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Taproom located in a historic bottling plant offering house-brewed beers, Ping-Pong, cornhole & TVs.</p>
							<p className="cardText">Website: <span><a href="">https://rhinegeist.com/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card five">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">American Sign Museum</h1>
						<h3 class="location">1330 Monmouth Ave, Cincinnati, OH, 45225</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">This museum in Cincinnati, Ohio, preserves, archives, and displays a collection of signs. </p>
							<p className="cardText">Website: <span><a href="">https://www.americansignmuseum.org/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card six">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">The Contemporary Arts Center</h1>
						<h3 class="location">44 E 6th St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">The CAC is a non-collecting museum that focuses on new developments in painting, sculpture, photography, architecture, performance art and new media.</p>
							<p className="cardText">Website: <span><a href="">https://www.contemporaryartscenter.org/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card seven">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Taft Museum of Art</h1>
						<h3 class="location">316 Pike St, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">The Taft Museum of Art in downtown Cincinnati is one of the finest small art museums in America. Spend a day exploring art and history at the Taft.</p>
							<p className="cardText">Website: <span><a href="">https://www.taftmuseum.org/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card eight">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Great American Ball Park</h1>
						<h3 class="location">100 Joe Nuxhall Way, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Great American Ball Park is a baseball stadium in Cincinnati, Ohio, which is the home field of Major League Baseball's Cincinnati Reds.</p>
							<p className="cardText">Website: <span><a href="">https://www.mlb.com/reds/ballpark</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="col">
			<div class="weather-card nine">
				<div class="top">
					<div class="wrapper">
						<div class="mynav">
							<a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span class="lnr lnr-cog"></span></a>
						</div>
						<h1 class="heading">Paul Brown Stadium</h1>
						<h3 class="location">1 Paul Brown Stadium, Cincinnati, OH, 45202</h3>
					</div>
				</div>
				<div class="bottom">
					<div class="wrapper">
						<ul class="forecast">
							<a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
							<li class="active">
							<p className="cardText">Paul Brown Stadium is an outdoor football stadium in Cincinnati, Ohio. It is the home venue of the Cincinnati Bengals of the National Football League and opened on August 19, 2000.</p>
							<p className="cardText">Website: <span><a href="">https://www.bengals.com/stadium/</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


		</div>
	</div>

</div>
        )
    }
}
