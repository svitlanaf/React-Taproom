import React, { Component } from "react";

class Keg extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.keg.brand}</td>
          <td>{this.props.keg.name}</td>
          <td>{this.props.keg.price}</td>
          <td>{this.props.keg.alcoholContent}</td>
          <td>{this.props.keg.level}</td>
          <button
            onClick={() => this.props.onSellPint(this.props.keg)}
            className="btn btn-secondary btn-sm"
          >
            Sell 1 Pint
          </button>
        </tr>
      </div>
    );
  }
}

export default Keg;
