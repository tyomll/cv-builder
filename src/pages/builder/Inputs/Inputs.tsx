import React, { FC } from 'react';
import FirstName from './FirstName';
import Email from './Email';
import LastName from './LastName';
import Profession from './Profession';
import Education from './Education';
import About from './About';
import styles from '../Builder.module.scss';

interface IInputs {
  details: any;
  setDetails: any;
  education: any;
  setEducation: any;
}
const Inputs: FC<IInputs> = ({ details, setDetails, education, setEducation }) => {
  return (
    <div className={styles.details}>
      <FirstName setDetails={setDetails} details={details} />
      <LastName setDetails={setDetails} details={details} />
      <About setDetails={setDetails} details={details} />
      <Email setDetails={setDetails} details={details} />
      <Profession setDetails={setDetails} details={details} />
      <Education setEducation={setEducation} education={education} />
    </div>
  );
};

export default Inputs;
