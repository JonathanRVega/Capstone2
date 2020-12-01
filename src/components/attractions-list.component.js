import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AttractionList extends Component {
    constructor(props) {
        super (props);

        this.state = {attractions: []};
    }

    componentDidMount() {
        axios.get('h')
    }
    render() {
        return (
            <div>
                <p>c</p>
            </div>
        )
    }
}
