import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
