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
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { this.attractionList() }
                </tbody>
            </table>
            </div>
        )
    }
}
