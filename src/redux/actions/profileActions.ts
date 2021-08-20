import { IProfile } from 'utils';

export enum ProfileActionsTypes {
  CREATE_PROFILE,
  UPDATE_PROFILE,
}

export type ProfileAction = {
  type: ProfileActionsTypes;
  payload: IProfile;
  propertyToUpdate: string;
};

export const createProfile = (profile: IProfile): ProfileAction => ({
  type: ProfileActionsTypes.CREATE_PROFILE,
  payload: profile,
  propertyToUpdate: '',
});

export const updateProfile = (
  profile: IProfile,
  propertyToUpdate: string
): ProfileAction => ({
  type: ProfileActionsTypes.UPDATE_PROFILE,
  payload: profile,
  propertyToUpdate: propertyToUpdate,
});
