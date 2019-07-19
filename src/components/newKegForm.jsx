import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getKeg, saveKeg } from "../kegListData";
import axios from "../../src/axios-db";

class NewKegForm extends Form {
  state = {
    data: {
      brand: "",
      name: "",
      price: "",
      alcoholContent: "",
      level: ""
    },
    errors: {}
  };

  schema = {
    id: Joi.string(),
    brand: Joi.string()
      .required()
      .label("Brand"),
    name: Joi.string()
      .required()
      .label("Name"),
    price: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Price ($)"),
    alcoholContent: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Alcohol Content (%)"),
    level: Joi.number()
      .required()
      .min(0)
      .max(124)
      .label("Level")
  };

  componentDidMount() {
    const kegId = this.props.match.params.id;
    if (kegId === "new-keg") return;

    const keg = getKeg(kegId);
    // if (!keg) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(keg) });
  }

  mapToViewModel(keg) {
    return {
      id: keg.id,
      brand: keg.brand,
      name: keg.name,
      price: keg.price,
      alcoholContent: keg.alcoholContent,
      level: keg.level
    };
  }

  doSubmit = () => {
    console.log(axios);
    // saveKeg(this.state.data);
    // this.props.history.push("/kegs");
    const newKeg = {
      brand: this.state.data.brand,
      name: this.state.data.name,
      price: this.state.data.price,
      alcoholContent: this.state.data.alcoholContent,
      level: this.state.data.level
    };
    console.log(newKeg);
    axios
      .post("/kegs.json", newKeg)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>New Keg Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("brand", "Brand")}
          {this.renderInput("name", "Name")}
          {this.renderInput("price", "Price")}
          {this.renderInput("alcoholContent", "Alcohol Content")}
          {this.renderInput("level", "Level")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewKegForm;
