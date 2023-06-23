import css from './Chapter.module.css';

function Chapter({ chapter }) {
  return <h1 className={css.chapter}>{chapter}</h1>;
}

export default Chapter;
