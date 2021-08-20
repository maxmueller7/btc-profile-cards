import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import faker from 'faker';
import { ProfileCard } from 'components/ProfileCard';
import { createProfile } from 'redux/actions/profileActions';
import { IProfile } from 'utils';

import styles from './ProfileCardsPage.module.scss';

const mapStateToProps = (state: any) => ({
  profiles: state.profiles,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createProfile: (profile: IProfile) => dispatch(createProfile(profile)),
});

const createProfileFromFakerData = (): IProfile => {
  return {
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_FIAV.svg/1280px-Flag_of_FIAV.svg.png',
    companyName: faker.company.companyName(),
    companySlogan: faker.company.catchPhrase(),
    emailAddress: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumberFormat(1),
    physicalAddress: {
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      streetAddress: faker.address.streetAddress(true),
      zipCode: faker.address.zipCode().slice(0, 5),
    },
    profilePictureLink: faker.image.avatar(),
    uuid: faker.datatype.uuid(),
    websiteAddress: faker.internet.url(),
  };
};

const ProfileCardsPage: FC<{ profiles: IProfile[]; createProfile: any }> = (
  props
): JSX.Element => {
  const handleAddProfileCard = (createProfile: any): void => {
    const newProfile = createProfileFromFakerData();
    createProfile(newProfile);
  };

  useEffect(() => {
    if (props.profiles.length < 20) {
      props.createProfile(createProfileFromFakerData());
    }
  }, [props]);

  return (
    <div>
      {props.profiles.map((userProfile) => {
        return (
          <div
            className={styles.profileCardContainer}
            key={`[profile-card-div-container-${userProfile.uuid}]`}
          >
            <ProfileCard
              userProfile={userProfile}
              key={`[profile-card-${userProfile.uuid}]`}
            />
          </div>
        );
      })}
      <div className={styles.newCardButtonContainer}>
        <button
          className={styles.newCardButton}
          onClick={() => handleAddProfileCard(props.createProfile)}
        >
          Add New Profile
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardsPage);
