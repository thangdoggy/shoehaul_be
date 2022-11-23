import React, { useState, useEffect } from "react";
import { Footer, Header } from "../components";
import { Link } from "react-router-dom";
import Filter from "../components/AllShoes/Filter";
import items from "../data/homepage/img/item.png";
// import { useAxiosGet } from '../Hooks/HttpRequests'
import Data from "../data/fakedata/Data";
//

import axios from "axios";

const styles = {
  productcard: {
    width: "313px",
  },
};

export default function AllProducts() {
  //

  // const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`

  // let products = useAxiosGet(url)

  // let content = null;

  // if (products.error) {
  //     content = <p>There was an error please refresh or try again later</p>
  // }
  // if (products.loading) {
  //     content = <p>Loading...</p>
  // }
  // if (products.data) {
  //     content =
  //         products.data.map((product, key) =>
  //         <Link to={`/products/${product.id}`}>
  //             <div className='product-items'>
  //                 <img src={items} alt={product.name} />
  //                 <h3>{product.name}</h3>
  //                 <p>{product.price}</p>
  //             </div>
  //         </Link>
  //     )
  // }

  const data = Data.map((product) => {
    return (
      <Link to={`/products/${product.id}`} style={styles.productcard}>
        <div
          className="product-items mb-10 ml-0 hover:shadow-md"
          style={styles.productcard}
        >
          <img src={items} alt={product.name} />
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <Header />
      <div id="products-page" className="mt-20 pt-5">
        <h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">All Products</h1>
        <div id="all-products" className="grid grid-cols-4">
          <div>
            <Filter />
          </div>
          <div id="product-lists" className="col-span-3 grid grid-cols-3 mb-10">
            {data}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
