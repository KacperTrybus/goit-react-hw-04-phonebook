import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, setFilter } = this.props;

    const handleFilterChange = e => {
      setFilter(e.target.value);
    };

    return (
      <div>
        <label htmlFor="filterInput" className="filter">
          Find contacts by name:
        </label>
        <input
          id="filterInput"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
