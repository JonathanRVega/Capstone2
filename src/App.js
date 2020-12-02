import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar.component";
import ThingsToDo from './components/Things.component';
import Blog from './components/Blogs.component.js';
import About from './components/About.component';
import Contact from './components/Contact.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/'/>
            <Route exact path='/thingsToDo' component={ ThingsToDo } />
            <Route exact path='/blog' component={ Blog } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/contact' component={ Contact } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
