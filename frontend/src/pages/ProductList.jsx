import React, { useState } from 'react';
import AdminHeader from "../components/AdminHeader";
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Data from '../data/fakedata/Data.json';

function Items({currentItems}) {

    return (
        <>
            {currentItems && currentItems.map((item, index) => (
                <div className="col-4" key={index}>
                    <div className='product-items m-5 h-80 rounded-xl hover:shadow-2xl shadow-md'>
                        <Link to={`/products/${item.id}`}>
                            <img src={item.image} alt={item.name} className="w-auto h-44 p-3" />
                            <h3 className='mx-3 font-bold text-lg '>{item.name}</h3>
                        </Link>
                        <p className='mx-3 text-xs mb-4 h-7 opacity-40'>{item.brand}</p>
                        <p className='mx-3 text-xl'>${item.price}</p>
                        <div>
                            <Link to={`/products/${item.id}/edit`}>
                                <button className='rounded-full border border-black border-solid hover:bg-black hover:text-white px-4 py-1 mx-2 font-bold float-right'>Edit</button>
                            </Link>
                            {/* <button className='rounded-full border border-black border-solid hover:bg-black hover:text-white px-2 py-1 mx-2 font-bold float-right' onClick={handleDelete}>Delete</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default function ProductList({ itemsPerPage }) {
    //Create pagination
    var keyCount = Object.keys(Data).length;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(keyCount / itemsPerPage);
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % keyCount;
        setItemOffset(newOffset);
    }

    return (
        <div>
            <AdminHeader />

            <div id='products-page' className='mt-5' >
                <div className="mx-5">
                    <p className="text-left text-xl w-72 font-bold px-1 py-3">ALL PRODUCTS</p> 
                </div>
                <div className='text-right mr-5'>
                    <Link to={`/products/add`}>
                        <button className='font-bold rouded-full border-black border border-solid p-3 hover:shadow-md rounded-full mx-10 hover:bg-black hover:text-white'>Add new product</button>
                    </Link>
                </div>
                <div id='all-products' className='grid mx-10 my-5 grid-cols-4'>
                    <div id='product-lists' className='col-span-4 grid grid-cols-4 mb-10'>
                        <Items currentItems={currentItems}/>
                    </div>
                </div>
            </div>

            <div className='ml-auto mr-0'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    pageRangeDisplayed={2}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    className="flex justify-center items-center px-5 font-medium rounded-md"
                    pageClassName='p-5 hover:shadow-md'
                    activeClassName='font-bold text-2xl'
                />
            </div>
        </div>
    )
}