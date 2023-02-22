import React from 'react';
import Avatar from '../../components/avatar/Avatar';
import { auth } from '../../firebase';
import s from './Profile.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.user}>
          <div className={s.avatar}>
            <Avatar />
          </div>
          <div className={s.details}>
            <h1>@{auth.currentUser?.displayName}</h1>
            <h4>{auth.currentUser?.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
