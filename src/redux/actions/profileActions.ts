import { AnyAction } from 'redux';
import { IProfile } from 'utils';

export enum ProfileActionsTypes {
  SET_EMAILADDRESS,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PHONENUMBER,
  SET_PROFILEPICTURELINK,
  SET_WEBSITEADDRESS,
}

export const setEmailAddress = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_EMAILADDRESS,
  payload: profile.emailAddress,
});
export const setFirstName = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_FIRSTNAME,
  payload: profile.firstName,
});

export const setLastName = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_LASTNAME,
  payload: profile.lastName,
});

export const setPhoneNumber = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_PHONENUMBER,
  payload: profile.phoneNumber,
});

export const setProfilePictureLink = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_PROFILEPICTURELINK,
  payload: profile.profilePictureLink,
});

export const setWebsiteAddress = (profile: IProfile): AnyAction => ({
  type: ProfileActionsTypes.SET_WEBSITEADDRESS,
  payload: profile.websiteAddress,
});
