import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

const Products = () => {
  const [product, setProduct] = useState("");
  async function axiosData() {
    const response = await axios.get("http://localhost:4000/products/");
    setProduct(response.data);
  }
  useEffect(() => {
    axiosData();
  }, []);

  return (
    <section id="Products">
      <div className="container">
        <div className="cards">
          {product &&
            product.map((item) => (
              <div className="card">
                <div className="productImg">
                  <img src={item.image} />
                </div>
                <div className="productTitle">
                  <p>{item.title}</p>
                </div>
                <div className="productDesc">
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
