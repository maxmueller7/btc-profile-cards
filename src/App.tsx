import React, { FC } from 'react';
import faker from 'faker';
import './App.scss';
import { IProfile } from './utils';

const App: FC<{}> = (): JSX.Element => {
  const data: IProfile[] = [];
  const createProfileFromFakerData = (): IProfile => {
    return {
      emailAddress: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phoneNumber: faker.phone.phoneNumberFormat(1),
      physicalAddress: {
        streetAddress: faker.address.streetAddress(true),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
      },
      profilePictureLink: faker.image.avatar(),
      websiteAddress: faker.internet.url(),
    };
  };

  for (var i = 0; i < 20; i++) {
    data.push(createProfileFromFakerData());
  }
  console.log(data);
  return (
    <div className='App'>
      <header></header>
    </div>
  );
};

export default App;
