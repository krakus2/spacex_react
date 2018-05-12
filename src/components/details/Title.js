import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/details/Title.css'

const Title = (props) => (
  <div className="containerRight__title">
      {props.title}
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title;
