import React from 'react'
export default function Filter() {
  return (
    <>
    <div id='filter'>
    <p>Price</p>
        <div>
            <input type='checkbox' />
            <label>Under $100</label>
            <br/>
            <input type='checkbox' />
            <label>$100 - $200</label><br/>
            <input type='checkbox' />
            <label>$200 - $500</label><br/>
            <input type='checkbox' />
            <label>Over $500</label>
        </div>
        <p>Colour</p>
        <div>
            <input type='checkbox' />
            <label>Black</label><br/>
            <input type='checkbox' />
            <label>White</label><br/>
            <input type='checkbox' />
            <label>Red</label><br/>
            <input type='checkbox' />
            <label>Blue</label><br/>
            <input type='checkbox' />
            <label>Green</label><br/>
            <input type='checkbox' />
            <label>Yellow</label><br/>
        </div>
        <p>Brand</p>
        <div>
            <input type='checkbox' />
            <label>Nike</label><br/>
            <input type='checkbox' />
            <label>Adidas</label><br/>
            <input type='checkbox' />
            <label>Converse</label><br/>
            <input type='checkbox' />
            <label>Reebok</label><br/>
            <input type='checkbox' />
            <label>Vans</label><br/>
        </div>
        <p>Style</p>
        <div>
            <input type='checkbox' />
            <label>Sports</label><br/>
            <input type='checkbox' />
            <label>Streetwear</label><br/>
            <input type='checkbox' />
            <label>Work</label><br/>
        </div>
        <button>Submit</button>
    </div>

        
    </>
  )
}
