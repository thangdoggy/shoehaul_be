import React from 'react'
import { useSelector } from 'react-redux';

export default function ShoeItem() {
  //const {ShoppingCartItem} = useContext(Context);
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <div className='mt-20 shadow-lg rounded-xl p-2.5'>
      <h1 className="text-2xl font-bold mb-5">Shopping List</h1>
      {cartItems.map((item) => {
        const {id, name, size, color, price, quantity, image} = item;
        return (
          <div key={id} className="grid grid-cols-2 pb-2.5">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>Size {size}</p>
              <p>{color}</p>
              <p>Price: ${price}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}
