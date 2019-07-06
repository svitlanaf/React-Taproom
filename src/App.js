import React, { Component } from "react";
import NavBar from "./components/navbar";
import KegList from "./components/keg_list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <KegList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
