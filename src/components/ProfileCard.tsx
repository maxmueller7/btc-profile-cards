import React, { FC } from 'react';
import styles from './ProfileCard.module.scss';
import { IProfile } from 'utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const ProfileCard: FC<{ userProfile: IProfile }> = (
  props
): JSX.Element => {
  const {
    city,
    state,
    streetAddress,
    zipCode,
  } = props.userProfile.physicalAddress;
  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePicture}>
        <img
          src={props.userProfile.profilePictureLink}
          alt={`${props.userProfile.firstName} ${props.userProfile.lastName}`}
        />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileName}>
          <h1>{`${props.userProfile.firstName} ${props.userProfile.lastName}`}</h1>
        </div>
        <div className={styles.profileContact}>
          <div className={styles.profileIconAndText}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{props.userProfile.emailAddress}</span>
          </div>
          <div className={styles.profileIconAndText}>
            <FontAwesomeIcon icon={faAddressBook} />
            <span>
              {`${streetAddress},`}
              <br />
              {` ${city}, ${state}, ${zipCode}`}
            </span>
          </div>
          <div className={styles.profileIconAndText}>
            <FontAwesomeIcon icon={faPhone} />
            <span>{props.userProfile.phoneNumber}</span>
          </div>
          <div className={styles.profileIconAndText}>
            <FontAwesomeIcon icon={faGlobe} />
            <span>{props.userProfile.websiteAddress}</span>
          </div>
        </div>
        <div className={styles.profileCompanyInfo}>
          <div className={styles.profileCompanyInfoImageContainer}>
            <img
              src={props.userProfile.companyLogo}
              alt={`${props.userProfile.companyName}`}
            />
          </div>
          <div className={styles.profileCompanyNameAndSlogan}>
            <span className={styles.profileCompanyName}>
              {props.userProfile.companyName}
            </span>
            <span>{props.userProfile.companySlogan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
