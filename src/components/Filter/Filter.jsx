import React from 'react';
import css from './Filter.module.css'
import PropTypes from 'prop-types'

const Filter = ({ value, onChange }) => {
    return (
        <input
            type='text'
            name='filter'
            value={value}
            onChange={ onChange}
            placeholder='Enter name for search'
            className={css.Filter__input}
        />
        
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };