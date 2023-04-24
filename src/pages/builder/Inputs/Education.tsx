import React, { FC } from 'react';
import s from '../Builder.module.scss';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IEmail {
  setEducation: any;
  education: any;
}
const Education: FC<IEmail> = ({ setEducation, education }) => {
  return (
    <div className={s.education}>
      <div
        className={s.add}
        onClick={() => {
          setEducation([...education, { date: '', email: '' }]);
        }}>
        <span>Education</span>
        <div>
          <FontAwesomeIcon icon={faAdd} />
        </div>
      </div>
      {education &&
        education.map((_: any, i: number) => {
          return (
            <div key={i}>
              <input
                type="text"
                placeholder="Date"
                onChange={(e) => setEducation({ ...education[i], date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEducation({ ...education[i], email: e.target.value })}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Education;
