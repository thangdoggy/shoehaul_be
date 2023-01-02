import React, { useEffect, useState } from "react";
import { Header, Footer } from "../../components";
import Items from './Items';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getSUM, getTotalItems, getTotalPrice, getVAT, increment, removeFromCart } from "../../actions/cartActions";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import Swal from "sweetalert2";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
  var { cartItems, totalItems, totalPrice, VATotal, SUM } = cart;
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
    dispatch(updateUserProfile({ id: user._id, cartItems }));
  }, [cartItems]);



  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  const dispatch2 = useDispatch();
  const handleSaveToCart = () => {
    Swal.fire("Good!", "You saved to cart successfully!", "success");
    dispatch2(updateUserProfile({ id: user._id, cartItems }));

  }
  const handleRemove = (product, size) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(product, size));
        //dispatch(updateUserProfile({ id: user._id, cartItems }));
        Swal.fire(
          'Deleted!',
          'Your shoe has been deleted.',
          'success'
        )
      }
    })
  }

  const incrementItems = (product) => {
    dispatch(increment(product));
    //dispatch(updateUserProfile({ id: user._id, cartItems }));
  }
  const decrementItems = (product) => {
    dispatch(decrement(product));
    
  }
  if (cartItems.length === 0) {
    if (typeof user.cartItems !== 'undefined' && user.cartItems.length !== 0) {
      for (let i = 0; i < user.cartItems.length; i++) {
        cartItems.push(user.cartItems[i]);
      }
      dispatch(getTotalPrice(cartItems));
      dispatch(getTotalItems(cartItems));
      dispatch(getVAT(cartItems));
      dispatch(getSUM(cartItems));
    }
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
  //console.log(cartItems);
  if (cartItems.length > 0) return (
    <>
      <Header />
      <div className='mt-20 pt-5 ml-14 mr-20' style={styles.context}>
        <h1 className='text-3xl  mt-5 mb-10 font-bold'>Your cart</h1>
        <div className="grid grid-cols-5 gap-9">
          <div id='list-cart-items' className='col-span-4'>
            {cartItems.map((item) => {
              {/* return <Items key={item.id} {...item} />; */ }
              return <div className="grid grid-cols-4 mb-10 hover:shadow-md transition ease-in rounded-xl" style={styles.list_items}>
                <div className="col-span-1">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="col-span-3 grid grid-cols-3">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Size {item.size}</p>
                    <p>{item.color}</p>
                    <div className="items-center grid grid-cols-3 mt-10">
                      <div>
                        <AiOutlineMinus className='cursor-pointer text-base' onClick={() => decrementItems(item.product)}></AiOutlineMinus>
                      </div>

                      <input type='text' disabled placeholder={item.quantity} className='bg-white' />
                      <div>
                        <AiOutlinePlus className='cursor-pointer text-base' onClick={() => incrementItems(item.product)}></AiOutlinePlus>
                      </div>
                    </div>

                  </div>
                  <div>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <button className="float-right cursor-pointer bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-xl transition ease-in" onClick={() => handleRemove(item.product, item.size)} >Remove</button>
                  </div>
                </div>
              </div>
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
              onClick={handleSaveToCart}
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
