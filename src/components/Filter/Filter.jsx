import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
     <label>
          Find contacts by name
          <input
              type="text"
              name="filter"  
              value={value}
              onChange={onChange}            
              required
          />
        </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;

