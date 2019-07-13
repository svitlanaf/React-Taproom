import React, { Component } from "react";
import KegListTable from "./kegListTable";
import { getKegs, deleteKeg } from "../kegListData";

class Kegs extends Component {
  state = {
    kegs: [],
    highAlcoholContent: false
  };

  componentDidMount() {
    this.setState({ kegs: getKegs() });
  }

  handleDelete = keg => {
    const kegs = this.state.kegs.filter(k => k.id !== keg.id);
    this.setState({ kegs });
    deleteKeg(keg.id);
  };

  handleSellPint = keg => {
    const kegs = [...this.state.kegs]; //cloning kegs array
    const index = kegs.indexOf(keg); // getting keg id
    kegs[index] = { ...keg };
    kegs[index].level--; // decrementing keg level
    this.setState({ kegs });
  };

  filterByAlcoholContent = () => {
    const highAlcoholContent = !this.state.highAlcoholContent;
    let kegs = getKegs();
    if (highAlcoholContent) {
      kegs = this.state.kegs.filter(k => k.alcoholContent >= 4);
    }
    this.setState({ highAlcoholContent, kegs });
  };

  render() {
    return (
      <div>
        <form>
          <p>
            <input
              type="checkbox"
              checked={this.state.highAlcoholContent}
              onChange={this.filterByAlcoholContent}
            />{" "}
            Kegs with alcohol content greater than 4%
          </p>
        </form>
        <KegListTable
          kegs={this.state.kegs}
          onDelete={this.handleDelete}
          onSellPint={this.handleSellPint}
        />
      </div>
    );
  }
}

export default Kegs;
