import React, { Component } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  getProducts = () => {
    Axios.get("/api/products")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getProducts();
  }

  addProduct = (e, img_url, name, price) => {
    e.preventDefault();
    Axios.post("/api/products", { img_url, name, price })
      .then((res) => {
        this.setState({
          products: [],
        });
        this.getProducts();
      })
      .catch((err) => console.log(err));
  };

  editProduct = (id, img_url, name, price) => {
    console.log(id);
    Axios
      .put(`/api/memories/edit/${id}`, { img_url, name, price })
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((err) => console.log(err));
  };

  deleteProduct = (id) => {
    Axios.delete(`/api/products/${id}`, id)
      .then((res) => {
        this.setState({
          products: res.data,
        });
        this.getProducts();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="App">
          {this.state.products.map((el) => {
            return (
              <Dashboard
                info={el}
                key={el.id}
                className="dashboard"
                editProduct={this.editProduct}
                deleteProduct={this.deleteProduct}
              />
            );
          })}

          <Form addProduct={this.addProduct} className="form" />
        </div>
      </div>
    );
  }
}

export default App;
