import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
