import React from "react";
import "./App.css";

import Home from "./Pages/homepage";

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';


import NavBar from "./Components/navbar";
import Footer from "./Components/footer";


const NavWithRouter = withRouter(NavBar);


function App() {
  return (
    <div>
      <Router>
        <NavWithRouter />
        <Switch>
          <Route path="/" exact component = {Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
