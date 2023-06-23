import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import css from './Header.module.css';

function Header() {
  const [activeNavLink, setActiveNavLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveNavLink(currentPath.includes('/movies') ? 'movies' : 'home');
  }, [location]);

  return (
    <header>
      <ul className={css.headerList}>
        <li className={css.headerListItem}>
          <NavLink
            to="/"
            className={`${css.headerLink} ${
              activeNavLink === 'home' ? css.activeNavLink : ''
            }`}
          >
            Home
          </NavLink>
        </li>
        <li className={css.headerListItem}>
          <NavLink
            to="/movies"
            className={`${css.headerLink} ${
              activeNavLink === 'movies' ? css.activeNavLink : ''
            }`}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
