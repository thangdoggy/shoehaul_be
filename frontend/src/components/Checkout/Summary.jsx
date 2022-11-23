import React, {useContext} from 'react'
import { Context } from '../../data/Context';

export default function Summary() {
    const {totalItems, totalPrice, VATotal, SUM} = useContext(Context);
    return (
        <div className='border border-black p-2.5'>
            <h1 className="text-2xl font-bold ">Summary</h1>
                    <div className="flex justify-between">
                    <div>
                        <p>{totalItems} Products</p>
                        <p>VAT</p>
                        <h1 className="font-bold">SUM</h1>
                        <p>Delivery fee</p>
                    </div>
                    <div>
                        <p>{totalPrice}</p>
                        <p>{VATotal}</p>
                        <p>{SUM}</p>
                        <p>FREE</p>
                    </div>
                    </div>
        </div>
    )
}
