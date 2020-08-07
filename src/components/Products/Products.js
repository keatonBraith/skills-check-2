import React from "react";



const Products = (props) => {
  const { img_url, name, price } = props.data;

  return (
    <div className='product_main' >
      <img className="product_img" src={img_url} alt="product" />
      <div className="product-info">
      <h3 className='product_name' >{name}</h3>
      <h3 className="product_price" >{price}</h3>
      </div>
    </div>
  );
};

export default Products;
