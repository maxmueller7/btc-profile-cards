import React, { FC } from 'react';
import styles from './ProfileCard.module.scss';
import { IProfile } from '../utils';

const ProfileCard: FC<{ profile: IProfile }> = (props): JSX.Element => {
  return <div className={styles.profileCard}></div>;
};

export default ProfileCard;
