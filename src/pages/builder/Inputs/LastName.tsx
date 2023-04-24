import React, { FC } from 'react';

interface IEmail {
  setDetails: any;
  details: any;
}

const LastName: FC<IEmail> = ({ setDetails, details }) => {
  return (
    <input
      type="text"
      placeholder="Last Name"
      onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
    />
  );
};

export default LastName;
