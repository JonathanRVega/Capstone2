import React, { Component } from 'react'
import AttractionList from './attractions-list.component';
import CreateAttraction from './create-attraction.component';
import Navbar from './navbar.component';


class Blogs extends Component {
    render() {
        return (
            <div className="App">
            <Navbar/>
            <CreateAttraction />
            <AttractionList />
            </div>
        )
    }
}

export default Blogs;