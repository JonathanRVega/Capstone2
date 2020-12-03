import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/FrontEndComponents/Home'
import ThingsToDo from './components/ToDo.component';
import Blog from './components/Blogs.component.js';
import About from './components/About.component';
import Contact from './components/Contact.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/thingsToDo' component={ ThingsToDo } />
            <Route path='/blog' component={ Blog } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
