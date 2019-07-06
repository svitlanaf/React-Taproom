import React, { Component } from "react";
import Keg from "./keg";

class KegList extends Component {
  render() {
    return (
      <div>
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
            <tr>
              {this.props.kegList.map(keg => (
                <Keg
                  key={keg.id}
                  onSellPint={this.props.onSellPint}
                  keg={keg}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default KegList;
