import React from 'react';
import Home from '../../pages/home/Home';
import Header from './header/Header';
import s from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default MainLayout;
