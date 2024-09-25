import React from "react";

function ProductCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <h6 className="card-title">{props.product.price}</h6>
        <p className="card-text">{props.product.desc}</p>
        <p>{props.product.isStock === true ? "-inStock" : "-out of stock"}</p>
        <button
          className="btn btn-primary"
          disabled={!props.product.isStock}
          onClick={() => {
            props.handleAddtoCart(props.product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
