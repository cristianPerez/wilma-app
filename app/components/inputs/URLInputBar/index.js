import React from 'react';
import PropTypes from 'prop-types';

const URLInputBar = ({ input }) => (
  <input
    {...input}
    placeholder="Enter a URL"
    style={{ width: '100%', height: '100%', padding: '0px 16px 0px 16px' }}
  />
);

URLInputBar.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }).isRequired
};

export default URLInputBar;
