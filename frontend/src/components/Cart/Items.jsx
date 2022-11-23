import React, { useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../data/homepage/img/logo-cart.png'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {Context} from '../../data/Context';
const styles = {
  select: {
    width: '75px',
    height: '51px'
  },
  list_items: {
    width: '900px'
  },
}

export default function Items({ id, name, size, color, price, quantity }) {
  const { removeItem, increment, decrement } = useContext(Context);

  return (
    <>
      <div className="grid grid-cols-4 mb-10 hover:shadow-md" style={styles.list_items}>
        <div className="col-span-1">
          <img src={logo} alt={name} />
        </div>
        <div className="col-span-3 grid grid-cols-3">
          <div>
            <h3>{name}</h3>
            <p>Size {size}</p>
            <p>{color}</p>
            <div className="items-center grid grid-cols-3 mt-10">
              <AiOutlineMinus  className='cursor-pointer text-base' onClick={() => decrement(id)}></AiOutlineMinus>
              <p>{quantity}</p>
              <AiOutlinePlus className='cursor-pointer text-base' onClick={() => increment(id)}></AiOutlinePlus>
            </div>
            
          </div>
          <div>
            <p>${price}</p>
          </div>
          <div>
            <AiOutlineClose className="float-right cursor-pointer" onClick={() => removeItem(id)} />
          </div>
        </div>
      </div>
    </>
  )
}
