import React, { Component } from "react";
import KegListTable from "./kegListTable";
import { getKegs } from "./../kegListData";

class Kegs extends Component {
  state = {
    kegs: []
  };

  componentDidMount() {
    this.setState({ kegs: getKegs() });
  }

  handleDelete = keg => {
    const kegs = this.state.kegs.filter(k => k.id !== keg.id);
    this.setState({ kegs });
  };

  handleSellPint = keg => {
    const kegs = [...this.state.kegs]; //cloning kegs array
    const index = kegs.indexOf(keg); // getting keg id
    kegs[index] = { ...keg };
    kegs[index].level--; // decrementing keg level
    this.setState({ kegs });
  };

  render() {
    return (
      <KegListTable
        kegs={this.state.kegs}
        onDelete={this.handleDelete}
        onSellPint={this.handleSellPint}
      />
    );
  }
}

export default Kegs;
