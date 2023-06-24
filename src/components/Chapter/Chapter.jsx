import PropTypes from 'prop-types';
import css from './Chapter.module.css';

function Chapter({ chapter }) {
  return <h1 className={css.chapter}>{chapter}</h1>;
}

Chapter.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default Chapter;
