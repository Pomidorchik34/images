import React from "react";
import products from "./json/products.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      <Link className="active" to="/cars">
        Cars
      </Link>
      <Link to="/">Products</Link>
      <div className="container">
        {products.map((value, index) => {
          return (
            <>
              <Link to="/products"></Link>
              <LazyLoadImage
                placeholderSrc="blur"
                loading="lazy"
                key={index}
                src={value.image}
                width={value.image}
              />
              <span>{value.title}</span>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Products;
