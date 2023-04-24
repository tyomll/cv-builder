import React, { FC } from 'react';

interface IEmail {
  setDetails: any;
  details: any;
}

const FirstName: FC<IEmail> = ({ setDetails, details }) => {
  return (
    <input
      type="text"
      placeholder="First Name"
      onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
    />
  );
};

export default FirstName;
