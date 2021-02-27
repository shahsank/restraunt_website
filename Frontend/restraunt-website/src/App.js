import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/componenets/Header";
import Footer from "../src/componenets/Footer";
import Home from "../src/componenets/Home";
import Account from "../src/componenets/Account";
import Menu from "../src/componenets/Menu";
import "./App.css";

const App = () => {
  return (
    <>
      
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/user" component={Account} />
        </Switch>
        <Footer />
      </Router>

      
    </>
  );
};

export default App;
