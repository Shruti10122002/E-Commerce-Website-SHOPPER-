import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrum.css';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  // Check if product is defined before accessing its properties
  if (!product || !product.category || !product.name) {
    return null; // Render nothing if product or required properties are missing
  }

  return (
    <div className='breadcrum'>
      <span>HOME</span>
      <img src={arrowIcon} alt="Arrow" />
      <span>SHOP</span>
      <img src={arrowIcon} alt="Arrow" />
      <span>{product.category}</span>
      <img src={arrowIcon} alt="Arrow" />
      <span>{product.name}</span>
    </div>
  );
};

// Prop Types validation
Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Breadcrum;
