import React from 'react';
import s from './Builder.module.scss';
import Inputs from './Inputs/Inputs';
import Preview from './Preview/Preview';

const Builder = () => {
  const [education, setEducation] = React.useState<any>([]);
  const [details, setDetails] = React.useState({
    firstName: 'Artyom',
    lastName: 'Hovsepyan',
    profession: 'Front-End Developer',
    email: 'artyom@resumize.com',
    about:
      'Experienced Junior Front-end Developer with a track record of optimizing efficiency, productivity, and service quality. Skilled in providing reliable support utilizing latest web technologies. Committed to continuous learning and development to deliver high-quality web projects.',
    experienceCount: 2,
    experience: [
      {
        date: '',
        company: '',
        role: '',
        description: [
          'Tasked to make interactive user interfaces.',
          'Creating editable cv templates',
        ],
      },
    ],
  });
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Inputs
          details={details}
          setDetails={setDetails}
          education={education}
          setEducation={setEducation}
        />
        <Preview details={details} />
      </div>
    </div>
  );
};

export default Builder;
