import React from 'react';
import PropTypes from 'prop-types';
import './btn.scss';

const Btn = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Btn.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
