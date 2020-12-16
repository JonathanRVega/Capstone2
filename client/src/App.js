import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/FrontEndComponents/Home'
import ThingsToDo from './components/FrontEndComponents/ToDo';
import Blog from './components/Blogs.component.js';
import About from './components/About.component';
import Contact from './components/Contact.component';
import Eat from './components/FrontEndComponents/Eat';
import Play from './components/FrontEndComponents/Play';
import Shop from './components/FrontEndComponents/Shop';
import ScrollToTop from './ScrollToTop'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/thingsToDo' component={ ThingsToDo } />
            <Route path='/blog' component={ Blog } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/eat' component={ Eat } />
            <Route path='/play' component={ Play } />
            <Route path='/shop' component={ Shop } />
          </Switch>
        </div>
      </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
