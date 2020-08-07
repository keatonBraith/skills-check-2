import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { img_url, name, price } = this.props.info;
    this.state = {
      img_url: img_url,
      name: name,
      price: price,
    };
  }

  render() {
    return (
      <div className="products_dashboard">
        <div className="product_main">
          <img
            src={this.props.info.img_url}
            alt="img"
            className="product_img"
          />
          <div className="product-info">
            <h3 className="product_name">{this.props.info.name}</h3>
            <h3 className="product_price">${this.props.info.price}</h3>
          <div className='dash-buttons' >
              <button className='edit-btn' onClick={() => {
                  this.props.editProduct(this.props.info.id, this.props.info.img_url, this.props.info.name, this.props.info.price)
              }} >Edit</button>
              <button className="delete-btn" onClick={() => this.props.deleteProduct(this.props.info.id)} >Delete</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
