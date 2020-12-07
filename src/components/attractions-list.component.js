import React, { Component } from 'react';
import axios from 'axios';
import { BACKEND_URL } from './config';
import TokyoKitty from '../assets/tokyokitty/484150.jpg';
import Footer from './FrontEndComponents/Footer';

export default class AttractionList extends Component {
    constructor(props) {
        super (props);
		this.state = {attractions: []};
    }

    componentDidMount() {
		this.getAttractionPost();
	}
	
	getAttractionPost() {
		axios
		  .get(BACKEND_URL + 'attractions')
		  .then((res) => {
			const data = res.data;
			console.log(res.data);
			this.setState({ attractions: data });
			console.log('data dun did got');
		  })
		  .catch((err) => {
			console.log('err>>', err);
			// alert('didn't work :(')
		  });
		}
		displayAttractionPosts = (attractions) => {
			if (!attractions.length) return null;
			return attractions.map((destination, index) => {
				return(
			  <div key={index} className="col-6">
			<div id='weather-card' className="weather-card one">
				<div className="top">
					<div className="wrapper">
						<div className="mynav">
							<a href="javascript:;"><span className="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span className="lnr lnr-cog"></span></a>
						</div>
						<h1 className="heading">{destination.name}</h1>
						<h3 className="location">{destination.address}, {destination.zipcode}</h3>
					</div>
					<img className="weatherImg" src={destination.imageUrl} alt="Please provide a valid image Url"></img>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<ul className="forecast">
							<a href="javascript:;"><span className="lnr lnr-chevron-up go-up"></span></a>
							<li className="active">
							<p className="cardText">{destination.description}</p>
							<p className="cardText">Website: <span><a href="">{destination.website}</a></span></p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
				)

			});
		  };
	  
    render() {
        return (
            <div className="container">
				<div className="row">
					{this.displayAttractionPosts(this.state.attractions)}
				</div>
			</div>
        )
    }
}
