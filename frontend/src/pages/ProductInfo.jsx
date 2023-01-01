import React, { useState, useContext, useEffect } from "react";
import items from "../data/homepage/img/product-logo.jpg";
import { Footer, Header, ShowRating } from "../components";
import { useParams } from "react-router-dom";
import { Context } from "../data/Context.js";
import Swal from 'sweetalert2'
import HoverRating from "../components/Comment/Rating";

import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import { Rating, Box } from "@mui/material";
import { productCreateReducer } from "../reducers/productReducers";
import { addToCart } from "../actions/cartActions";

const styles = {
  image: {
    width: "952px",
    height: "537px",
  },
  li: {
    width: "65px",
    height: "44px",
    lineHeight: "44px",
  },
  addToCart: {
    width: "309px",
    height: "70px",
    backgroundColor: "#fbeaab",
  },
  description: {
    width: "952px",
  },
};

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function ProductInfo({ match }) {
  const [rating, setRating] = useState(2);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  const { productID } = useParams();
  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    dispatch(listProductDetails(productID));
  }, [dispatch, successProductReview, productID]);

  // Submit comment
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productID, {
        rating,
        comment,
      })
    );
  };



  const [selectedSize, setSelectedSize] = useState("36");
  const dispatch2 = useDispatch();
  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };
  //   const { addToCart } = useContext(Context);
  //
    const handleAddToCart = (e) => {
      e.preventDefault();
      Swal.fire(
        'Bravo!',
        'You added to your cart successfully!',
        'success'
      )
      dispatch2(addToCart(productID, selectedSize));
    };
  //   };
  const normal = "border border-black rounded-xl text-2xl mt-5 cursor-pointer hover:bg-black hover:text-white transition ease-in focus:border-4";
  const afterClick = "border border-black rounded-xl text-2xl mt-5 cursor-pointer bg-black text-white";
  return (
    <>
      <Header />
      <div className="product">
        <div className="product-image mt-20 pt-20 ml-10 grid grid-cols-3">
          <div id="img" className="col-span-2">
            <img src={product.image} alt={product.name}
            className='mx-auto w-1/2 shadow-lg'
            //style={styles.image} 
          />
          </div>
          <div className="product-info mr-20">
            <h1 className="text-3xl mb-10">{product.name}</h1>
            <h1 className="text-3xl mb-10">${product.price}</h1>
            <h2 className="text-xl mb-5">Color: {product.color}</h2>
            <p className="text-xl mb-5">In stock: {product.stock}</p>
            <h2 className="text-2xl">Size:</h2>
            <ul className="product-size grid grid-cols-4 mb-10 text-center">
              {["36", "37", "38", "39", "40", "41", "42", "43"].map((size) => {
                return (
                  <div className={selectedSize === size ? afterClick : normal} style={styles.li}>
                  <li key={size}
                  >
                    <label>
                      <input type="radio" name="size" value={size}
                        checked={size === selectedSize} onChange={handleChange}
                        className='hidden' />

                      <span className='cursor-pointer'>{size}</span>
                    </label>
                  </li>
                  </div>
                  
                );
              })}
            </ul>
            {product.stock > 0 ? (
              <button
                
                className="border border-black text-3xl rounded-3xl  shadow-lg hover:bg-amber-200 transition ease-in py-2 px-6"
                onClick={handleAddToCart}
              >
                Add to Cart
                
              </button>
              
            ) : (
              <button
                className="border border-black text-3xl rounded-3xl shadow-lg py-2 px-6 bg-slate-300"
                
                disabled
              >
                Out of stock
              </button>
            )}
          </div>
              
        </div>
        
        <div
          className="product-description text-base ml-10 mt-16 mb-16"
          style={styles.description}
        >
          <h1 className="text-2xl font-bold mb-5">Description</h1>
          <p className="leading-7">{product.description}</p>
          
        </div>
      </div>

      <div className="ml-10">
        <h1 className="text-2xl font-bold mb-5">Rating</h1>
        <p className="text-2xl font-bold text-red-600">
          <span className="text-5xl">
            {Math.round(product.rating * 10) / 10.0}
          </span>{" "}
          out of 5
        </p>
        <div className="flex mt-5">
          <Rating
            name="read-only"
            precision="0.5"
            value={Math.round(product.rating * 2) / 2.0}
            readOnly
          />
          <Box sx={{ ml: 2 }}>
            {labels[Math.round(product.rating * 2) / 2.0]}
          </Box>
        </div>

        <p className="font-bold mt-5">with {product.numReviews} reviews</p>

        <h1 className="text-2xl font-bold mt-5">Comments</h1>

        {product.reviews.map((review) => (

          <div className="rounded-xl shadow-lg p-5 mt-5 w-1/2">
            <p className="font-bold">{review.name}</p>
            <div className="flex">
              <Rating
                name="read-only"
                size="small"
                precision="0.5"
                value={review.rating}
                readOnly
              />
              <Box sx={{ ml: 2 }}>
                {labels[Math.round(review.rating * 2) / 2.0]}
              </Box>
            </div>
            <p className="italic">{review.updatedAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      
      <span className="text-xl font-bold mb-5 ml-10 mt-10 block">Leave your feedback</span>
      {userInfo ? (
        <Form onSubmit={submitHandler} className='ml-10 mt-5 mb-10 flex flex-col rounded-xl  w-1/2 p-5 bg-amber-100 shadow-lg'>
          <Form.Group controlId="rating">
            <Form.Label className="font-bold block mb-2">Rating</Form.Label>
            <HoverRating
              handleRating={(newValue) => {
                setRating(newValue);
              }}
              
            />
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label className="font-bold mb-2 block mt-2">Comment</Form.Label>
            <Form.Control
              as="textarea"
              row="10"
              value={comment}
              placeholder = "Write your comment here"
              onChange={(e) => setComment(e.target.value)}
              className = 'resize-none h-24 shadow-lg focus:outline-none rounded-xl pl-5 pt-2 w-full mx-auto'
            ></Form.Control>
          </Form.Group>
          <Button
            disabled={loadingProductReview}
            type="submit"
            variant="primary"
            className = 'font-bold text-white bg-red-500 hover:bg-red-700 transition ease-in rounded-xl mt-5 w-20 py-1'
          >
            Submit
          </Button>
        </Form>
      ) : (
        <div className="ml-10 mb-10">
          Please <Link to="/login" className="font-bold">log in</Link> to write a review.{" "}
        </div>
      )}
      
      <Footer />
    </>
  );
}
