import React from 'react'
const styles = {
  input : {
    width: '730px',
  },
  textarea: {
    width: '730px',
    minHeight: '205px',
    maxHeight: '205px',
  },
  default_details: {
    width: '225px',
    backgroundColor: '#fbeaab'
  },
  hover_button: {
    backgroundColor: '#fbeaab',
  }
}
export default function BillingDetail() {
  return (
    <>
        <div className='col-span-3'>
            <h1 className='text-3xl  mt-5 mb-10 font-bold'>Billing Details</h1>
            <form className='col-span-2'>
                <label for='name'/>
                <input type='text' placeholder='Name' className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none' style={styles.input}/>
                <label for='phone'/>
                <input type='text' placeholder='Phone number' className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none' style={styles.input}/>
                <label for='address'/>
                <input type='text' placeholder='Address' className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none' style={styles.input}/>
                <textarea type='text' placeholder='Note' className='pl-10 block border border-black p-2.5 w-96 mb-5 rounded-3xl focus:outline-none  ' style={styles.textarea}/>
                <button className="mt-5 font-bold text-base object-fill rounded-3xl border border-black p-2.5" style={styles.default_details}>Use default detail</button>
            </form>
            <h2 className='mt-10 text-2xl mb-10 font-bold'>Delivery Method</h2>
            <button style={styles.input} className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl hover:bg-amber-200 transition'><span className='float-left'>GHN</span> <span className='float-right mr-5'>FREE</span></button>
            <h2 className='mt-10 text-2xl mb-10 font-bold'>Payment Method</h2>
            <button style={styles.input} className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl text-left hover:bg-amber-200 transition'>COD</button>
            <button style={styles.input} className='pl-10 border border-black p-2.5 w-96 mb-5 rounded-3xl text-left hover:bg-amber-200 transition'>Mastercard/Visa</button>
            <button className="block mt-5 font-bold text-base object-fill rounded-3xl border border-black p-2.5 mb-10" style={styles.default_details}>MAKE PURCHASE NOW</button>
        </div>
    </>
    
  )
}
