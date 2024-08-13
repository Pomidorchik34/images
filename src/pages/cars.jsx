import React from "react";
import cars from "./json/cars.json";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Cars() {
  return (
    <>
      <Link to="/">Products</Link>
      <div className="container">
        {cars.map((value) => {
          return (
            <>
              <LazyLoadImage
                placeholderSrc="blur"
                loading="lazy"
                src={value.image}
                alt=""
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cars;
