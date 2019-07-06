import React, { Component } from "react";

class Keg extends Component {
  state = {
    level: this.props.keg.level
  };

  //   handleSellPint =

  //   sellPint(keg: Keg) {
  //     if (keg.level > 0) {
  //         keg.level -= 1;
  //     }

  render() {
    return (
      <div>
        {/* <button
                  onClick={() => this.handleSellPint(keg)}
                  className="btn btn-primary btn-sm"
                >
                  Sell 1 Pint
                </button> */}
      </div>
    );
  }
}

export default Keg;
