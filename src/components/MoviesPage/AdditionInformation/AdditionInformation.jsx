import { NavLink } from 'react-router-dom';

import css from './AdditionInformation.module.css';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

function AdditionInformation() {
  return (
    <ul className={css.listAddInfo}>
      <li className={css.listItem}>
        <NavLink to="../cast" className={css.movieNavLink}>
          <Cast />
        </NavLink>
      </li>
      <li className={css.listItem}>
        <NavLink to="../reviews" className={css.movieNavLink}>
          <Reviews />
        </NavLink>
      </li>
    </ul>
  );
}

export default AdditionInformation;