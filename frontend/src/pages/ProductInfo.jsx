import React, { useState, useContext, useEffect } from "react";
import items from "../data/homepage/img/product-logo.jpg";
import { Footer, Header, ShowRating } from "../components";
import Data from "../data/fakedata/Data.json";
import { useParams } from "react-router-dom";
import { Context } from "../data/Context.js";
import Comment from "../components/Comment/Comment";
import AddComment from "../components/Comment/AddComment";
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

  //   const { addToCart } = useContext(Context);

  const [selectedSize, setSelectedSize] = useState("36");

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  //
  //   const handleAddToCart = () => {
  //     if (authenticated) {
  //       //   addToCart(
  //       //     thisProduct.id,
  //       //     selectedSize,
  //       //     thisProduct.price,
  //       //     thisProduct.name,
  //       //     thisProduct.color
  //       //   );
  //     } else {
  //       window.location.href = "/login";
  //     }
  //   };

  //   const [comments, updateComments] = useState([]);
  //   const [deleteModalState, setDeleteModalState] = useState(false);

  //   const getData = async () => {
  //     const res = await fetch("../data/fakedata/Comment.json");
  //     const data = await res.json();
  //     updateComments(data.comments);
  //   };

  //   useEffect(() => {
  //     localStorage.getItem("comments") !== null
  //       ? updateComments(JSON.parse(localStorage.getItem("comments")))
  //       : getData();
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem("comments", JSON.stringify(comments));
  //     deleteModalState
  //       ? document.body.classList.add("overflow--hidden")
  //       : document.body.classList.remove("overflow--hidden");
  //   }, [comments, deleteModalState]);

  //   // update score
  //   let updateScore = (score, id, type) => {
  //     let updatedComments = [...comments];

  //     if (type === "comment") {
  //       updatedComments.forEach((data) => {
  //         if (data.id === id) {
  //           data.score = score;
  //         }
  //       });
  //     } else if (type === "reply") {
  //       updatedComments.forEach((comment) => {
  //         comment.replies.forEach((data) => {
  //           if (data.id === id) {
  //             data.score = score;
  //           }
  //         });
  //       });
  //     }
  //     updateComments(updatedComments);
  //   };

  //   // add comments
  //   let addComments = (newComment) => {
  //     let updatedComments = [...comments, newComment];
  //     updateComments(updatedComments);
  //   };

  //   // add replies
  //   let updateReplies = (replies, id) => {
  //     let updatedComments = [...comments];
  //     updatedComments.forEach((data) => {
  //       if (data.id === id) {
  //         data.replies = [...replies];
  //       }
  //     });
  //     updateComments(updatedComments);
  //   };

  //   // edit comment
  //   let editComment = (content, id, type) => {
  //     let updatedComments = [...comments];

  //     if (type === "comment") {
  //       updatedComments.forEach((data) => {
  //         if (data.id === id) {
  //           data.content = content;
  //         }
  //       });
  //     } else if (type === "reply") {
  //       updatedComments.forEach((comment) => {
  //         comment.replies.forEach((data) => {
  //           if (data.id === id) {
  //             data.content = content;
  //           }
  //         });
  //       });
  //     }

  //     updateComments(updatedComments);
  //   };

  //   // delete comment
  //   let commentDelete = (id, type, parentComment) => {
  //     let updatedComments = [...comments];
  //     let updatedReplies = [];

  //     if (type === "comment") {
  //       updatedComments = updatedComments.filter((data) => data.id !== id);
  //     } else if (type === "reply") {
  //       comments.forEach((comment) => {
  //         if (comment.id === parentComment) {
  //           updatedReplies = comment.replies.filter((data) => data.id !== id);
  //           comment.replies = updatedReplies;
  //         }
  //       });
  //     }

  //     updateComments(updatedComments);
  //   };

  return (
    <>
      <Header />
      <div className="product">
        <div className="product-image mt-20 pt-20 ml-10 grid grid-cols-3">
          <div id="img" className="col-span-2">
            <img src={items} alt={product.name} style={styles.image} />
          </div>
          <div className="product-info mr-20">
            <h1 className="text-3xl mb-10">{product.name}</h1>
            <h1 className="text-3xl mb-10">${product.price}</h1>
            <h2 className="text-2xl mb-10">Color: {product.color}</h2>
            <h2 className="text-2xl">Size:</h2>
            <ul className="product-size grid grid-cols-4 mb-10 text-center">
              {["36", "37", "38", "39", "40", "41", "42", "43"].map((size) => {
                return (
                  <li
                    key={size}
                    className="border border-black text-2xl mt-5 cursor-pointer hover:border-2 active:border-4 focus:border-4"
                    style={styles.li}
                  >
                    <label>
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={size === selectedSize}
                        onChange={handleChange}
                        className="hidden"
                      />

                      <span className="cursor-pointer">{size}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            {product.stock > 0 ? (
              <button
                style={styles.addToCart}
                className="border border-black text-3xl rounded-3xl ml-9 hover:bg-amber-300"
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="border border-black text-3xl rounded-3xl ml-9"
                style={styles.addToCart}
                disabled
              >
                Out of stock
              </button>
            )}
          </div>
        </div>
        <div
          className="product-description text-base ml-10 mt-16 mb-16 hover:shadow-md"
          style={styles.description}
        >
          <h1 className="text-2xl font-bold mb-5">Description</h1>
          <p>{product.description}</p>
          <p>In stock: {product.stock}</p>
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
        <div className="flex">
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

        <p className="font-bold">with {product.numReviews} reviews</p>

        <h1 className="text-2xl font-bold mt-5">Comments</h1>

        {product.reviews.map((review) => (
          <div>
            <p>{review.name}</p>
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
            <p>{review.updatedAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col justify-center gap-1.5 p-5">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            commentData={comment}
            updateScore={updateScore}
            updateReplies={updateReplies}
            editComment={editComment}
            commentDelete={commentDelete}
            setDeleteModalState={setDeleteModalState}
          />
        ))}
        <AddComment buttonValue={"Post"} addComments={addComments} />
      </div> */}
      <span className="text-xl font-bold mb-5">Leave your feedback</span>
      {userInfo ? (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <HoverRating
              handleRating={(newValue) => {
                setRating(newValue);
              }}
            />
          </Form.Group>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              row="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            disabled={loadingProductReview}
            type="submit"
            variant="primary"
          >
            Submit
          </Button>
        </Form>
      ) : (
        <div>
          Please <Link to="/login">log in</Link> to write a review{" "}
        </div>
      )}

      <Footer />
    </>
  );
}
