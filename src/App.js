import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import AttractionList from "./components/attractions-list.component";
import CreateAttraction from "./components/create-attraction.component"

function App() {
  return (
    <div>
      <CreateAttraction />
    </div>
  );
}

export default App;
