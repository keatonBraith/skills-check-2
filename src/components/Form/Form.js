import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      img_url: "",
      name: "",
      price: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form className="form-main">
          <img src={this.state.img_url} alt="img" className="form-img" />
          <input
            onChange={(e) => this.handleChange(e)}
            name="img_url"
            value={this.state.img_url}
            type="url"
            className="form-inputs"
            placeholder="Image URL"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            name="name"
            value={this.state.name}
            type="text"
            className="form-inputs"
            placeholder="Product Name"
          />
          <input
            onChange={(e) => this.handleChange(e)}
            name="price"
            value={this.state.price}
            type="text"
            className="form-inputs"
            placeholder="Product Price"
          />
          <div className="form-buttons">
            <button className="cancel-button">Cancel</button>
            <button className="add-button" onClick={(e) => {
                  this.props.addProduct(
                    e,
                    this.state.img_url,
                    this.state.name,
                    this.state.price
                  );
                  this.setState({ img_url: "", name: "", price: "" });
                }}>
              Add Inventory
            </button>
          </div>
        </form>
      </div>
    );
  }
}
