import css from './AdditionInformation.module.css';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/MoviesPage/Reviews/Reviews';

function AdditionInformation() {
  return (
    <div className={css.containerAddInfo}>
      <h2 classNAme={css.chapterAddInfo}>Addition Information</h2>
      <ul className={css.listAddInfo}>
        <li className={css.listItem}>
          <Cast />
        </li>
        <li className={css.listItem}>
          <Reviews />
        </li>
      </ul>
    </div>
  );
}

export default AdditionInformation;
