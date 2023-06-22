import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header>
      <ul className={css.headerList}>
        <li className={css.headerListItem}>
          <NavLink to="home" className={css.headerLink}>
            Home
          </NavLink>
        </li>
        <li className={css.headerListItem}>
          <NavLink to="movies" className={css.headerLink}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
