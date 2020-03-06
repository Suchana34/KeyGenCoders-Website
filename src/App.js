import React from "react";
import "./App.css";

import Home from "./Pages/homepage";
import Team from "./Pages/teampage";
import About from "./Pages/about";



import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';


import NavBar from "./Components/navbar";
import Footer from "./Components/footer";


const NavWithRouter = withRouter(NavBar);


function App() {
  return (
    <div style = {{backgroundColor: '#343a40'}}>
      <Router>
        <NavWithRouter />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/team" exact component = {Team} />
          <Route path="/about_us" exact component = {About} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
