import React, { Component } from 'react'
import AttractionList from './attractions-list.component';
import CreateAttraction from './create-attraction.component';

class Blogs extends Component {
    render() {
        return (
            <div className="App">
            <AttractionList />
            <CreateAttraction />
            </div>
        )
    }
}

export default Blogs;