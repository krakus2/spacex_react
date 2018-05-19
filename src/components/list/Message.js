import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/list/Message.css'

const Message = ({ text }) => <span className="list__message">{text}</span>

Message.propTypes = {
  text: PropTypes.string.isRequired
}

export default Message;
