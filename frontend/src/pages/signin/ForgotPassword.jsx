import React from 'react'
import { Header } from '../../components'
import {Footer } from '../../components'
import background from '../../data/homepage/img/fp-background.png'
import { Link } from 'react-router-dom'
const styles = {
    background: {
        backgroundImage: `url(${background})`,
        height: '600px'
    },
    button: {
        //backgroundColor: "#FFe2ad",
        width: '710px',
        height: '59px',
    },
    fp_background: {
        backgroundColor: '#d9d9d9',
        width: '888px',
        height: '400px'
    },
    input: {
      width: '710px',
      height: '59px',
      background: "rgba(255, 255, 255, 0.5)",
      border: "1px solid #000000",
    },
}

export default function ForgetPassword() {
  return (
    <>
        <Header />
        <div className="bg-center bg-cover bg-no-repeat mt-20 pt-20 text-center" style={styles.background}>
            <form className="rounded-3xl border border-black m-auto" style={styles.fp_background}>
            <h1 className="text-3xl mt-10 mb-5 font-bold">Forget Password?</h1>
            <h2 className='text-2xl mb-10'>Enter your email address</h2>
                <div className="input">
                    <label for="email"></label>
                    <input type="email" name="email" placeholder="Email" className="mb-10 rounded-3xl pl-10 text-base focus:outline-none" style={styles.input}/>
                </div>
                <Link to='/newpassword'><button className="rounded-3xl mt-5 mb-5 cursor-pointer border-black border text-2xl font-bold bg-amber-200 hover:bg-amber-300 transition ease-in duration-200" style={styles.button}>Submit</button></Link>
            </form>
        </div>
        <Footer />
    </>
    
  )
}
