import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={shortid.generate()}
          name={option}
          type="button"
          onClick={handleClick}
          style={{ minWidth: 200 }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};
