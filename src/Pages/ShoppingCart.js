import React from "react";
import "./ShoppingCart.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

function ShoppingCart() {
  const datas = [
    {
      id: 1,
      name: "Vivo",
      price: 15000,
      desc: "Some quick example text to build on the card title",
      image: img1,
      isStock: true,
    },
    {
      id: 2,
      name: "Samsung",
      price: 30000,
      desc: "Some quick example text to build on the card title",
      image: img2,
      isStock: false,
    },
    {
      id: 3,
      name: "Sony",
      price: 45000,
      desc: "Some quick example text to build on the card title",
      image: img3,
      isStock: true,
    },
    {
      id: 4,
      name: "iPhone",
      price: 75000,
      desc: "Some quick example text to build on the card title",
      image: img4,
      isStock: false,
    },
    {
      id: 5,
      name: "Mi",
      price: 20000,
      desc: "Some quick example text to build on the card title",
      image: img3,
      isStock: true,
    },
    {
      id: 6,
      name: "Blackberry",
      price: 250000,
      desc: "Some quick example text to build on the card title",
      image: img1,
      isStock: false,
    },
    {
      id: 7,
      name: "Xiomi",
      price: 25000,
      desc: "Some quick example text to build on the card title",
      image: img4,
      isStock: true,
    },
  ];

  return (
    <div className="container-fluid mainBox">
      <div className="row">
        <div className="col-10 left">
          <div className="row p-3 d-flex gap-4">
            {datas.map((product) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-title">{product.price}</h6>
                    <p className="card-text">{product.desc}</p>
                    <p>
                      {product.isStock === true ? "-inStock" : "-out of stock"}
                    </p>
                    <button className="btn btn-primary" disabled={!product.isStock === true ? true : false}>
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-2 right">right</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
