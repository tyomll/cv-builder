import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { auth } from '../../../firebase';
import s from './Header.module.scss';

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
          <Link to="templates">
            <span>Templates</span>
          </Link>
          {!auth.currentUser ? (
            <>
              {' '}
              <Link to="login" className={s.login}>
                <span>Login</span>
              </Link>
              <Link to="register" className={s.register}>
                <span>Register</span>
              </Link>
            </>
          ) : (
            <Link to="profile" className={s.avatar}>
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="avatar" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
