import React from 'react';
import { auth } from '../../firebase';

const Builder = () => {
  return <div> {auth.currentUser?.displayName}</div>;
};

export default Builder;
