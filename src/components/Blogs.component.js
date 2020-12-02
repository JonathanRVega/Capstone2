import React, { Component } from 'react'
import AttractionList from './attractions-list.component';

class Blogs extends Component {
    render() {
        return (
            <div className="App">
            <AttractionList />
            <p>Blog Page</p>
            </div>
        )
    }
}

export default Blogs;