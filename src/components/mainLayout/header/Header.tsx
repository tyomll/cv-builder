import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import s from './Header.module.scss';

const links = [
  {
    title: 'Templates',
    link: 'templates',
  },
  {
    title: 'Login',
    link: 'login',
  },
  {
    title: 'Register',
    link: 'register',
  },
];
const Header: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={s.links}>
          {links.map((link) => {
            return (
              <Link to={link.link}>
                <span>{link.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
