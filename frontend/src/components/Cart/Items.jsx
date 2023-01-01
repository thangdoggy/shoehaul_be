import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../data/homepage/img/logo-cart.png'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeFromCart } from '../../actions/cartActions';
const styles = {
  select: {
    width: '75px',
    height: '51px'
  },
  list_items: {
    width: '900px'
  },
}

export default function Items({ product, name, size, color, price, quantity, image }) {
  //const { removeItem, increment, decrement } = useContext(Context);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cart;
  const handleRemove = (id) => {
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
  }
  const decrementItems = (product) => {
    dispatch(decrement(product));
  }
  return (
    <>
      <div className="grid grid-cols-4 mb-10 hover:shadow-md transition ease-in rounded-xl" style={styles.list_items}>
        <div className="col-span-1">
          <img src={image} alt={name} />
        </div>
        <div className="col-span-3 grid grid-cols-3">
          <div>
            <h3>{name}</h3>
            <p>Size {size}</p>
            <p>{color}</p>
            <div className="items-center grid grid-cols-3 mt-10">
              <div>
                <AiOutlineMinus className='cursor-pointer text-base' onClick={() => decrementItems(product)}></AiOutlineMinus>
              </div>

              <input type='text' disabled placeholder={quantity} className='bg-white'/>
              <div>
                <AiOutlinePlus className='cursor-pointer text-base' onClick={() => incrementItems(product)}></AiOutlinePlus>
              </div>
            </div>

          </div>
          <div>
            <p>${price}</p>
          </div>
          <div>
            <button className="float-right cursor-pointer bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-xl transition ease-in" onClick={() => handleRemove(product, size)} >Remove</button>
          </div>
        </div>
      </div>
    </>
  )
}
