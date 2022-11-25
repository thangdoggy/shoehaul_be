import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../components";
import Filter from "../components/Search/Filter";
import items from "../data/homepage/img/item.png";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { listProducts } from "../actions/productActions";

const styles = {
  productcard: {
    width: "313px",
  },
};

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="col-4" key={index}>
            <Link to={`/products/${item._id}`} style={styles.productcard}>
              <div
                className="product-items mb-10 ml-0 hover:shadow-md"
                style={styles.productcard}
              >
                <img src={items} alt={item.name} />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export default function AllProducts({ itemsPerPage = 9 }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //Create pagination
  var keyCount = Object.keys(products).length;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(keyCount / itemsPerPage);
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % keyCount;
    setItemOffset(newOffset);
  };

  // End of creating pagination
  return (
    <div>
      <Header />
      <div id="products-page" className="mt-20 pt-5">
        <h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">All Products</h1>
        <div id="all-products" className="grid grid-cols-4">
          <div>
            <Filter />
          </div>
          <div id="product-lists" className="col-span-3 grid grid-cols-3 mb-10">
            <Items currentItems={currentItems} />
          </div>
        </div>
      </div>
      <div className="ml-auto mr-0">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          className="flex justify-center items-center px-5 font-medium rounded-md"
          pageClassName="p-5 hover:shadow-md"
          activeClassName="font-bold text-2xl"
        />
      </div>
      <Footer />
    </div>
  );
}
