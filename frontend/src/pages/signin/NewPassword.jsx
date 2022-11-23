import React from 'react'
import { Header } from '../../components'
import {Footer } from '../../components'
import background from '../../data/homepage/img/login-background.png'
const styles = {
  background: {
    backgroundImage: `url(${background})`,
    height: '631px'
  },
  reset_background : {
    backgroundColor: "#D9d9d9",
    width:'888px',
    height: '393px'
  },
  button: {
    backgroundColor: "#FFe2ad",
    width: '710px',
    height: '59px'
  },
  input: {
    width: '710px',
      height: '59px',
      background: "rgba(255, 255, 255, 0.5)",
      border: "1px solid #000000"
  }

}
export default function Checkmail() {
  return (
    <>
        <Header />
        <div className="bg-center bg-cover bg-no-repeat mt-20 pt-20 text-center" 
      style={styles.background}>
          <div id='reset-password' className="rounded-3xl border border-black m-auto" style={styles.reset_background}>
              <h1 className="text-3xl mt-10 mb-10">Reset your password</h1>
              <label for="password"></label>
              <input type="password" name="password"  placeholder="Your new password" className="rounded-3xl pl-10 text-base focus:outline-none" style={styles.input}/>
              <label for="password"></label>
              <input type="password" name="password"  placeholder="Confirm new password" className="mt-5 rounded-3xl pl-10 text-base focus:outline-none" style={styles.input}/>
              <button className="rounded-3xl mt-10 mb-5 cursor-pointer border-black border text-2xl font-bold" style={styles.button}>Reset Password</button>
          </div>
        </div>
        <Footer />
    </>
    
  )
}
