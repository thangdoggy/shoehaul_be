import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header } from "../components";
import Filter from "../components/Search/Filter";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { listProducts } from "../actions/productActions";
import Data from "../data/fakedata/Data.json";
const styles = {
  productcard: {
    width: "313px",
  },
};

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map(({_id, name, image, price}, index) => (
          <div key={index}>
            <Link to={`/products/${_id}`} style={styles.productcard}>
              <div className="flex flex-col items-center transition ease-in-out hover:bg-amber-200 rounded-3xl shadow-lg">
                <img src={image} alt={name} className='h-52 shadow-lg mx-auto w-1/2' />
                <div className="mt-5 mb-5">
                  <h3 className="font-bold text-xl text-center">{name}</h3>
                  <p className="text-center">${price}</p>
                </div>
              </div>


            </Link>
          </div>
        ))}
    </>
  );
}

const AllProducts = ({ itemsPerPage = 9 }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  //Filter
  const [resultFound, setResultFound] = useState(true);
  const [list, setList] = useState(Data);
  const [selectedPrice, setSelectedPrice] = useState([50, 1000]);
  
  const [filterBrand, setFilterBrand] = useState([
    { id: 1, checked: false, label: 'Nike' },
    { id: 2, checked: false, label: 'Adidas' },
    { id: 3, checked: false, label: 'Vans' },
    { id: 4, checked: false, label: 'Converse' },
  ])
  const [filterColour, setFilterColour] = useState([
    { id: 1, checked: false, label: 'Black' },
    { id: 2, checked: false, label: 'White' },
    { id: 3, checked: false, label: 'Red' },
    { id: 4, checked: false, label: 'Blue' },
    { id: 5, checked: false, label: 'Green' },
    { id: 6, checked: false, label: 'Yellow' },
  ])
  const [filterStyle, setFilterStyle] = useState([
    { id: 1, checked: false, label: 'Sports' },
    { id: 2, checked: false, label: 'Streetwear' },
    { id: 3, checked: false, label: 'Work' },
  ])

  const handleChangeCheckedBrand = (id) => {
    const brandStateList = filterBrand;
    const newFilterBrand = brandStateList.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item
    }
    )
    setFilterBrand(newFilterBrand);
  }
  const handleChangeCheckedColour = (id) => {
    const colourStateList = filterColour;
    const newFilterColour = colourStateList.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item
    }
    )
    setFilterColour(newFilterColour);
  }
  const handleChangePrice = (e, value) => {
    setSelectedPrice(value);
  }
  const handleChangeCheckedStyle = (id) => {
    const styleStateList = filterStyle;
    const newFilterStyle = styleStateList.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked }
      }
      return item
    }
    )
    setFilterStyle(newFilterStyle);
  }
  
  const applyFilters = () => {
    let updatedList = products;
    const brandChecked = filterBrand.filter((item) => item.checked).map((item) => item.label);
    const colourChecked = filterColour.filter((item) => item.checked).map((item) => item.label);
    const styleChecked = filterStyle.filter((item) => item.checked).map((item) => item.label);
    if (brandChecked.length > 0) {
      updatedList = updatedList.filter((item) => brandChecked.includes(item.brand));
    }
    if (colourChecked.length > 0) {
      updatedList = updatedList.filter((item) => colourChecked.includes(item.color));
    }
    if (styleChecked.length > 0) {
      updatedList = updatedList.filter((item) => styleChecked.includes(item.style));
    }
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    
    if (updatedList.length === 0) {
      setResultFound(false);
    }
    else {
      setResultFound(true);
    }
    setList(updatedList);
  }
  useEffect(() => {
    applyFilters();
  }, [filterBrand, filterColour, selectedPrice, filterStyle]);

  //Create pagination
  var keyCount = Object.keys(list).length;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = list.slice(itemOffset, endOffset);
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
        <div id="all-products" className="grid grid-cols-4 mb-20">
          <div>
            <Filter
              filterBrand={filterBrand}
              filterColour={filterColour}
              filterStyle={filterStyle}
              selectedPrice = {selectedPrice}
              changeCheckedBrand={handleChangeCheckedBrand}
              changeCheckedColour={handleChangeCheckedColour}
              changePrice = {handleChangePrice}
              changeCheckedStyle={handleChangeCheckedStyle}
            />
          </div>
          <div id="product-lists" className="col-span-3 grid grid-cols-3 mb-10 gap-9 mr-10">
          {resultFound ? ( <Items currentItems={currentItems} />) : (<h1 className="text-3xl ml-14 mt-5 mb-10 font-bold">No results found</h1>)}
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
          className="flex justify-center items-center px-5 font-medium rounded-md mb-10"
          pageClassName="p-5 hover:shadow-md hover:bg-amber-200 transition ease-in"
          activeClassName="font-bold text-2xl"
        />
      </div>
      <Footer />
    </div>
  );
}
export default AllProducts;