import React, { Component } from "react";
import KegListTable from "./kegListTable";
import { getKegs, deleteKeg } from "../kegListData";

class Kegs extends Component {
  state = {
    kegs: [],
    highAlcoholContent: false,
    premiumBeer: false
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
    if (kegs[index].level <= 10) {
      alert("Refill me!");
    }
  };

  filterByAlcoholContent = () => {
    const highAlcoholContent = !this.state.highAlcoholContent;
    let kegs = getKegs();
    if (highAlcoholContent) {
      kegs = this.state.kegs.filter(k => k.alcoholContent >= 5);
    }
    this.setState({ highAlcoholContent, kegs });
  };

  filterByPrice = () => {
    const premiumBeer = !this.state.premiumBeer;
    let kegs = getKegs();
    if (premiumBeer) {
      kegs = this.state.kegs.filter(k => k.price >= 6);
    }
    this.setState({ premiumBeer, kegs });
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
            Kegs with alcohol content greater than 5%
          </p>
        </form>
        <form>
          <p>
            <input
              type="checkbox"
              checked={this.state.premiumBeer}
              onChange={this.filterByPrice}
            />{" "}
            Premium beer
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
