import React, { Component } from "react";
import { getKegList } from "../keg_list_data";

class KegList extends Component {
  state = {
    kegList: getKegList()
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Alcohol Content (%)</th>
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
              <td>
                {/* <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default KegList;
