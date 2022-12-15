import React from "react";
import CheckboxProton from './CheckboxProton';
import SliderProton from "./SliderProton";
const Filter = ({ filterBrand, filterColour, filterStyle, selectedPrice, changeCheckedBrand, changeCheckedColour, changePrice, changeCheckedStyle }) =>

(

  <div>
    <div id="filter" className="mr-20 pl-5 pt-5 shadow-lg rounded-xl">
      <div>
        <p className='font-bold text-2xl'>Colour</p>
        {filterColour.map((item) => (
          <CheckboxProton
            key={item.id}
            element={item}
            changeChecked={changeCheckedColour}
          />
        ))}
      </div>
      <div>
        <p className='font-bold text-2xl'>Brand</p>
        {filterBrand.map((item) => (
          <CheckboxProton
            key={item.id}
            element={item}
            changeChecked={changeCheckedBrand}
          />
        ))}
      </div>
      <div>
        <p className='font-bold text-2xl'>Style</p>
        {filterStyle.map((item) => (
          <CheckboxProton
            key={item.id}
            element={item}
            changeChecked={changeCheckedStyle}
          />
        ))}
      </div>
      <div>
        <p className='font-bold text-2xl mb-8'>Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      

    </div>
  </div>
);
export default Filter;
