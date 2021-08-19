export interface IProfile {
  companyLogo: string;
  companyName: string;
  companySlogan: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  physicalAddress: PhysicalAddress;
  profilePictureLink: string;
  uuid: string;
  websiteAddress: string;
}

export type PhysicalAddress = {
  city: string;
  state: string;
  streetAddress: string;
  zipCode: string;
};
