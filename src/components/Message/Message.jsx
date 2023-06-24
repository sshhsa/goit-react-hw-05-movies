import PropTypes from 'prop-types';
import css from './Message.module.css';

function Message({ message }) {
  return <p className={css.message}>{message}</p>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
