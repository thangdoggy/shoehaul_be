import React from 'react'
import Slider from '@mui/material/Slider';


export default function SliderProton({value, changePrice}) {
  return (
    <div className='mr-5'>
      <Slider
        value={value}
        onChange={changePrice}
        valueLabelDisplay='on'
        min={50}
        max={1000}
        color='secondary'
      />
    </div>
  )
}
