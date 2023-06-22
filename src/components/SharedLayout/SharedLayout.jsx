import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
