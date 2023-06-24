import { useLocation, NavLink } from 'react-router-dom';
import css from './MovieDetailsButtonGoBack.module.css';

function MovieDetailsButtonGoBack() {
  const location = useLocation();
  return (
    <NavLink to={location.state?.from ?? '/'} className={css.buttonGoBack}>
      Go back
    </NavLink>
  );
}

export default MovieDetailsButtonGoBack;
