import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class KegListTable extends Component {
  columns = [
    {
      path: "brand",
      label: "Brand",
      content: keg => <Link to={`/kegs/${keg.id}`}>{keg.brand}</Link>
    },
    { path: "name", label: "Name" },
    { path: "price", label: "Price ($)" },
    { path: "alcoholContent", label: "Alcohol Content (%)" },
    { path: "level", label: "Level" },
    {
      key: "sellPint",
      content: keg => (
        <button
          onClick={() => this.props.onSellPint(keg)}
          className="btn btn-secondary btn-sm"
        >
          Sell 1 Pint
        </button>
      )
    },
    {
      key: "delete",
      content: keg => (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => this.props.onDelete(keg)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { kegs } = this.props;
    return <Table columns={this.columns} data={kegs} />;
  }
}

export default KegListTable;
