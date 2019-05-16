import React from 'react';
import PropTypes from 'prop-types';
import './btn.scss';

const Btn = ({
  active, onClick, children, className,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    className={className}
  >
    {children}
  </button>
);

Btn.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Btn;
