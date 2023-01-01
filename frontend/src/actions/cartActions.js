import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, DECREMENT, GET_TOTAL, INCREMENT } from "../constants/cartConstants";

export const addToCart = (product, size) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:5000/api/products/${product}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.stock,
            size: size,
            quantity: 1
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id, size) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload:  {
            product: id,
            size: size
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const increment = (id) => (dispatch, getState) => {
    dispatch({
        type: INCREMENT,
        payload:  {
            product: id
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const decrement = (id) => (dispatch, getState) => {
    dispatch({
        type: DECREMENT,
        payload: {
            product: id
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const getTotalItems = (cartItems) => (dispatch, getState) => {
    dispatch({
        type: GET_TOTAL,
        payload: cartItems
    });
    localStorage.setItem('totalItems', JSON.stringify(getState().cart.totalItems));
}

export const getTotalPrice = (cartItems) => (dispatch, getState) => {
    dispatch({
        type: GET_TOTAL,
        payload: cartItems
    });
    localStorage.setItem('totalPrice', JSON.stringify(getState().cart.totalPrice));
}

export const getSUM = (cartItems) => (dispatch, getState) => {
    dispatch({
        type: GET_TOTAL,
        payload: cartItems
    });
    localStorage.setItem('SUM', JSON.stringify(getState().cart.SUM));
}

export const getVAT = (cartItems) => (dispatch, getState) => {
    dispatch({
        type: GET_TOTAL,
        payload: cartItems
    });
    localStorage.setItem('VAT', JSON.stringify(getState().cart.VATotal));
}
