import React, { useState, useContext, useEffect } from 'react'
import AdminHeader from "../components/AdminHeader";
import Data from '../data/fakedata/Data.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
    const { productID } = useParams();
    const thisProduct = Data.find((product) => product.id == productID);

    return (
        <>
            <AdminHeader />
            <div className=''>
                <div className='py-5 my-20 grid grid-cols-4' >
                    <div className='col-span-2 bg-blue-200 mx-5 my-auto'>
                        <img src={thisProduct.image} alt={thisProduct.name}/>
                    </div>
                    <div className='col-span-2 mx-20'>
                        <h1 className='text-3xl font-serif font-bold'>{thisProduct.name}</h1>
                        <h1 className='text-xl mb-5 font-serif'>{thisProduct.brand}</h1>
                        <div className='text-base w-full my-5 italic'>
                            {thisProduct.description}
                        </div>
                        <div className="grid grid-cols-4 text-center my-10">
                            <p className='text-2xl font-serif font-bold'>Style</p>
                            <p className='text-2xl font-serif font-bold'>Color</p>
                            <p className='text-2xl font-serif font-bold'>Stock</p>                    
                            <p className='text-2xl font-serif font-bold'>Price</p> 
                            <p className='text-base'>{thisProduct.style}</p>
                            <p className='text-base'>{thisProduct.color}</p>
                            <p className='text-base'>{thisProduct.stock}</p>
                            <p className='text-base'>{thisProduct.price}</p>
                        </div>
                        <div className='grid grid-cols-1 text-center my-10'>
                            {/* <Link to={`/products/${thisProduct.id}/edit`}>
                                <button className='mx-10 rounded-full border border-black border-solid hover:bg-black hover:text-white p-3 font-bold'>Edit product</button>
                            </Link> */}
                            <Link to={`/products`}>
                                <button className='mx-10 rounded-full border border-black border-solid hover:bg-black hover:text-white px-5 py-2 font-bold'>Back</button>
                            </Link>
                            {/* <button className='mx-10 rounded-full border border-black border-solid hover:bg-black hover:text-white p-3 font-bold' onClick={handleDelete}>Delete product</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}