import React from "react";
import Layout from "../components/Layout";

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Quantum Jumpsuit - Blue",
      price: 199.99,
      image: "/assets/jumpsuit-blue.png",
    },
    {
      id: 2,
      name: "Quantum Jumpsuit - Black",
      price: 189.99,
      image: "/assets/jumpsuit-black.png",
    },
  ];

  return (
    <Layout>
      <h1>Shop Futuristic Fashion</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => alert(`Added ${product.name} to cart!`)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ShopPage;
