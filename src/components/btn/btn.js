import React from 'react';
import PropTypes from 'prop-types';
import './btn.scss';

const Btn = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    className="controlBtns__switcher-btn"
  >
    {children}
  </button>
);

Btn.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
