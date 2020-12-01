import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import AttractionList from "./components/attractions-list.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={AttractionList} />
    </Router>
  );
}

export default App;
