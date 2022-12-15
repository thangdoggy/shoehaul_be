import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxProton = ({ element, changeChecked  }) => {
  const { checked, label, id } = element;
  return (
    <div>
      <FormControlLabel

        control={
          <Checkbox

            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
            className='transition ease-in z-0 absolute'
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;
