import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import css from './Header.module.css';

function Header() {
  const [activeNavLink, setActiveNavLink] = useState('');

  const handleClickActiveNavLink = buttonId => {
    setActiveNavLink(buttonId);
  };
  return (
    <header>
      <ul className={css.headerList}>
        <li className={css.headerListItem}>
          <NavLink
            to="home"
            className={`${css.headerLink} ${
              activeNavLink === 'home' ? css.activeNavLink : ''
            }`}
            onClick={() => {
              handleClickActiveNavLink('home');
            }}
          >
            Home
          </NavLink>
        </li>
        <li className={css.headerListItem}>
          <NavLink
            to="movies"
            className={`${css.headerLink} ${
              activeNavLink === 'movies' ? css.activeNavLink : ''
            }`}
            onClick={() => {
              handleClickActiveNavLink('movies');
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
