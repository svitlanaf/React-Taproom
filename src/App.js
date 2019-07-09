import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/notFound";
import NewKeg from "./components/newKeg";
import LoginForm from "./components/loginForm";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/new-keg" component={NewKeg} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
