import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSUM, getTotalItems, getTotalPrice, getVAT } from '../../actions/cartActions';

export default function Summary() {
    //const {totalItems, totalPrice, VATotal, SUM} = useContext(Context);
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(getTotalPrice(cartItems));
            dispatch(getTotalItems(cartItems));
            dispatch(getVAT(cartItems));
            dispatch(getSUM(cartItems));
        }
    ,[]);
    const {totalItems, totalPrice, VATotal, SUM} = cart;
    return (
        <div className='shadow-lg rounded-xl p-2.5'>
            <h1 className="text-2xl font-bold ">Summary</h1>
                    <div className="flex justify-between">
                    <div>
                        <p>{totalItems} Products</p>
                        <p>VAT</p>
                        <h1 className="font-bold">SUM</h1>
                        <p>Delivery fee</p>
                    </div>
                    <div>
                        <p>${totalPrice}</p>
                        <p>${VATotal}</p>
                        <p>${SUM}</p>
                        <p>FREE</p>
                    </div>
                    </div>
        </div>
    )
}
