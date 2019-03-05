import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = (event) => {
    const { handleCheckboxChange } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(event);
  }

  render() {
    const { label, id } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            id={id}
          />

          {label}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
