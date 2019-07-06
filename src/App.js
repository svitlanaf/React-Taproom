import React, { Component } from "react";
import NavBar from "./components/navbar";
import KegList from "./components/keg_list";
import "./App.css";
import { getKegList } from "./keg_list_data";

class App extends Component {
  state = {
    kegList: getKegList()
  };

  handleSellPint = keg => {
    const kegs = [...this.state.kegList]; //cloning kegs array
    const index = kegs.indexOf(keg); // getting keg id
    kegs[index] = { ...keg };
    kegs[index].level--; // decrementing keg level
    this.setState({ kegs });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <KegList
            kegList={this.state.kegList}
            onSellPint={this.handleSellPint}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
