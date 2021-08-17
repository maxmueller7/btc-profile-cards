export interface IProfile {
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  physicalAddress: PhysicalAddress;
  profilePictureLink: string;
  websiteAddress: string;
}

export type PhysicalAddress = {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
};
