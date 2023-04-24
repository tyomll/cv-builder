import React, { FC } from 'react';

interface IEmail {
  setDetails: any;
  details: any;
}
const Email: FC<IEmail> = ({ setDetails, details }) => {
  return (
    <input
      type="text"
      placeholder="Email"
      onChange={(e) => setDetails({ ...details, email: e.target.value })}
    />
  );
};

export default Email;
