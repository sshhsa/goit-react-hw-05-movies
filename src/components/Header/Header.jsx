import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  return (
    <header>
      <ul className={css.headerList}>
        <li className={css.headerListItem}>
          <NavLink to="home">Home</NavLink>
        </li>
        <li className={css.headerListItem}>
          <NavLink to="movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
