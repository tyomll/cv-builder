import React from 'react';

const AvatarStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
};
const Avatar: React.FC = () => {
  return (
    <img
      style={AvatarStyles}
      src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
      alt="avatar"
    />
  );
};

export default Avatar;
