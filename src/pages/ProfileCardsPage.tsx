import React, { FC, useEffect, useState } from 'react';
import styles from './ProfileCardsPage.module.scss';
import faker from 'faker';
import { ProfileCard } from 'components/ProfileCard';
import { IProfile } from 'utils';

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

export const ProfileCardsPage: FC<{}> = (): JSX.Element => {
  const [data, setData] = useState<IProfile[]>([]);

  const handleAddProfileCard = (data: IProfile[]): void => {
    const newData = [...data];
    const newProfile = createProfileFromFakerData();
    newData.push(newProfile);
    setData(newData);
  };

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      setData((data) => [...data, createProfileFromFakerData()]);
    }
  }, []);

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
