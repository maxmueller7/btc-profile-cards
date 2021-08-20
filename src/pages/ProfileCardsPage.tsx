import React, { FC, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import faker from 'faker';
import { ProfileCard } from 'components/ProfileCard';
import { setNewProfile } from 'redux/actions/profileActions';
import { IProfile } from 'utils';

import styles from './ProfileCardsPage.module.scss';

const mapStateToProps = (state: any) => ({
  profiles: state.profiles,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNewProfile: (profile: IProfile) => dispatch(setNewProfile(profile)),
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

const ProfileCardsPage: FC<{ profiles: IProfile[]; setNewProfile: any }> = (
  props
): JSX.Element => {
  const [data, setData] = useState<IProfile[]>([]);

  const handleAddProfileCard = (data: IProfile[]): void => {
    const newData = [...data];
    const newProfile = createProfileFromFakerData();
    newData.push(newProfile);
    setData(newData);
  };

  useEffect(() => {
    if (props.profiles.length <= 20) {
      props.setNewProfile(createProfileFromFakerData());
    }
    setData(props.profiles);
  }, [props.profiles]);

  return (
    <div>
      {data.map((userProfile) => {
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
          onClick={() => handleAddProfileCard(data)}
        >
          Add New Profile
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCardsPage);
