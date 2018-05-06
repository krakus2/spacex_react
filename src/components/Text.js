import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Text.css'

const Text = (props) => (
  <div className="containerRight__text">
      {props.text}
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired
}

export default Text;
