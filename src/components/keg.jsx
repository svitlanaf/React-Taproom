import React, { Component } from "react";

class Keg extends Component {
  //   state = {
  //     level: this.props.keg.level
  //   };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onSellPint(this.props.keg)}
          className="btn btn-secondary btn-sm"
        >
          Sell 1 Pint
        </button>
      </div>
    );
  }
}

export default Keg;
