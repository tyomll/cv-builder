import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Header from './header/Header';
import s from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header />
        <div className={s.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
