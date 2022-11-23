import React from 'react'
import items from '../data/homepage/img/product-logo.jpg'
import { Footer, Header } from "../components";
import Data from '../data/fakedata/Data';
import { useParams } from 'react-router-dom';

const styles = {
    image : {
        width: '952px',
        height: '537px'
    },
    li : {
        width: '65px',
        height: '44px',
        lineHeight: '44px'
    },
    addToCart: {
        width: '309px',
        height: '70px',
        backgroundColor: '#fbeaab'
    },
    description: {
        width: '952px'
    }
}
export default function Product(props) {
    const { productID } = useParams();
    const thisProduct = Data.find((product) => product.id === productID);

  return (
    <>
        <Header />
        <div className='product'>
            <div className = 'product-image mt-20 pt-20 ml-10 grid grid-cols-3' >
                <div id="img" className='col-span-2'>
                    <img  src={items} alt={thisProduct.name} style={styles.image}/>
                </div>
                <div className='product-info mr-20'>
                    <h1 className='text-3xl mb-10'>{thisProduct.name}</h1>
                    <h1 className='text-3xl mb-10'>${thisProduct.price}</h1>
                    <h2 className='text-2xl'>Size:</h2>
                    <ul className='product-size grid grid-cols-4 mb-10 text-center'>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>36</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>37</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>38</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>39</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>40</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>41</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>42</li>
                        <li className='border border-black text-2xl mt-5 cursor-pointer' style={styles.li}>43</li>
                    </ul>
                    <button className='border border-black text-3xl rounded-3xl ml-9' style={styles.addToCart}>Add to Cart</button>
                </div>
            </div>
            <div className='product-description text-base ml-10 mt-16 mb-16 hover:shadow-md' style={styles.description}>
                <p>{thisProduct.description}</p>
            </div>
        </div>
        <Footer/>
    </>
  )
}
