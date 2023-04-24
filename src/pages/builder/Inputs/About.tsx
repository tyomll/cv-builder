import React, { FC } from 'react';

interface IEmail {
  setDetails: any;
  details: any;
}
const About: FC<IEmail> = ({ setDetails, details }) => {
  return (
    <input
      type="text"
      placeholder="About"
      onChange={(e) => setDetails({ ...details, about: e.target.value })}
    />
  );
};

export default About;
