import React, { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import Items from './Items';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSUM, getTotalItems, getTotalPrice, getVAT } from "../../actions/cartActions";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";

const styles = {
  context: {
    minHeight: '900px'
  },
  checkout: {
    width: '200px',
    //backgroundColor: '#fbeaab'
  }
}

const ContextCart = () => {
  //const {ShoppingCartItem, totalItems, totalPrice, VATotal, SUM} = useContext(Context);
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalItems, totalPrice, VATotal, SUM } = cart;
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  //const [ownCart, setOwnCart] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //console.log(userInfo);
  useEffect(() => {
    dispatch(getTotalPrice(cartItems));
    dispatch(getTotalItems(cartItems));
    dispatch(getVAT(cartItems));
    dispatch(getSUM(cartItems));

  }
    , [cartItems]);
  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  const dispatch2 = useDispatch();
  const handleSaveToCart = () => {
    dispatch2(updateUserProfile({ id: user._id, cartItems }));

  }
  //console.log(user);
  //console.log(user.cartItems);
    if (cartItems.length === 0) {
      return (
        <>
          <Header />
          <div id='cart-page' className='mt-20 ml-14 mr-20 pt-5' style={styles.context}>
            <h1 className='text-3xl  mt-5 mb-10 font-bold'>Your cart</h1>
            <h2>You have {totalItems} items in your cart</h2>
          </div>
          <Footer />
        </>
      )
    }


    else return (
      <>
        <Header />
        <div className='mt-20 pt-5 ml-14 mr-20' style={styles.context}>
          <h1 className='text-3xl  mt-5 mb-10 font-bold'>Your cart</h1>
          <div className="grid grid-cols-5">
            <div id='list-cart-items' className='col-span-4'>
              {cartItems.map((item) => {
                return <Items key={item.id} {...item} />;
              })}
            </div>
            <div className="text-center">
              <div id='summary' className="rounded-xl p-2.5 text-left leading-8  shadow-lg">
                <h1 className="text-2xl font-bold ">Summary</h1>
                <div className="flex justify-between">
                  <div>
                    <p>{totalItems} Products</p>
                    <p>VAT</p>
                    <h1 className="font-bold">SUM</h1>
                  </div>
                  <div className="text-right">
                    <p>${totalPrice}</p>
                    <p>${VATotal}</p>
                    <p>${SUM}</p>
                  </div>
                </div>
              </div>
              <Link to='/checkout'><button className="mt-10 font-bold text-2xl object-fill rounded-3xl p-2.5 hover:bg-black hover:text-white shadow-lg transition ease-in"
                style={styles.checkout}
                onClick = {handleSaveToCart}
                >Checkout</button></Link>
              <button style={styles.checkout}
                onClick={handleSaveToCart}
                className="mt-10 font-bold text-2xl object-fill rounded-3xl p-2.5 hover:bg-black hover:text-white shadow-lg transition ease-in">Save to cart</button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );

};

export default ContextCart;
