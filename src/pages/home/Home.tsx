import React from 'react';
import { Link } from 'react-router-dom';
import cvVector from '../../assets/home-cv-vector.png';
import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.heading}>
          <h1>Your Dream Job Starts Here.</h1>
          <h2>Build Your Resume Now!</h2>
          <p>
            Welcome to Resumize, the easiest way to create a professional CV that stands out from
            the crowd. Our powerful yet simple-to-use tool helps you create a custom CV in minutes,
            with no design skills needed.
          </p>
          <Link to="/templates">
            <button>Start Building CV</button>
          </Link>
        </div>
        <div className={s.image}>
          <img src={cvVector} alt="cv" />
        </div>
      </div>
    </div>
  );
};

export default Home;
