import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar.component";
import ThingsToDo from './components/Things.component';
import Blog from './components/Blogs.component';
import About from './components/About.component';
import Contact from './components/Contact.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/thingsToDo' Component={ ThingsToDo } />
            <Route exact path='/blog' Component={ Blog } />
            <Route exact path='/about' Component={ About } />
            <Route exact path='/contact' Component={ Contact } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
