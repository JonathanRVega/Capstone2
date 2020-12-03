import React, { Component } from 'react';
import axios from 'axios';

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
			<div class="weather-card rain">
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

	</div>
</div>

            </div>
        )
    }
}
