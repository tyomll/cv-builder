import React, { FC } from 'react';

interface IEmail {
  setDetails: any;
  details: any;
}

const Profession: FC<IEmail> = ({ setDetails, details }) => {
  return (
    <input
      type="text"
      placeholder="Profession"
      onChange={(e) => setDetails({ ...details, profession: e.target.value })}
    />
  );
};

export default Profession;
