import React, { Component } from "react";
import { getKegList } from "../keg_list_data";
import Keg from "./keg";

class KegList extends Component {
  state = {
    kegList: getKegList()
  };

  handleSellPint = keg => {
    const kegs = [...this.state.kegList]; //cloning kegs array
    const index = kegs.indexOf(keg); // getting keg id
    kegs[index] = { ...keg };
    kegs[index].value--; // decrementing keg value
    this.setState({ kegs });
  };

  render() {
    return (
      //   <div>
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Alcohol Content (%)</th>
            <th>Level (pints)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.kegList.map(keg => (
            <tr key={keg.id}>
              <td>{keg.brand}</td>
              <td>{keg.name}</td>
              <td>{keg.price}</td>
              <td>{keg.alcoholContent}</td>
              <td>{keg.level}</td>
              <Keg
                // <td>
                onSellPint={this.handleSellPint}
                // </td>
                keg={keg}
              />
            </tr>
          ))}
        </tbody>
      </table>
      //   </div>
    );
  }
}

export default KegList;
