import {
  ProfileAction,
  ProfileActionsTypes,
} from 'redux/actions/profileActions';
import { IProfile } from 'utils';

const initialState: IProfile[] = [];

export const profileReducer = (
  state: IProfile[] = initialState,
  action: ProfileAction
): IProfile[] => {
  switch (action.type) {
    case ProfileActionsTypes.CREATE_PROFILE:
      return [
        ...state,
        {
          companyLogo: action.payload.companyLogo,
          companyName: action.payload.companyName,
          companySlogan: action.payload.companySlogan,
          emailAddress: action.payload.emailAddress,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          phoneNumber: action.payload.phoneNumber,
          physicalAddress: {
            city: action.payload.physicalAddress.city,
            state: action.payload.physicalAddress.state,
            streetAddress: action.payload.physicalAddress.streetAddress,
            zipCode: action.payload.physicalAddress.zipCode,
          },
          profilePictureLink: action.payload.profilePictureLink,
          uuid: action.payload.uuid,
          websiteAddress: action.payload.websiteAddress,
        },
      ];
    case ProfileActionsTypes.UPDATE_PROFILE:
      const { emailAddress, uuid } = action.payload;
      const currentUser = state.filter((user) => user.uuid === uuid);
      if (currentUser) {
        const updatedUser = { ...currentUser[0], emailAddress };
        return [...state.filter((user) => user.uuid !== uuid), updatedUser];
      } else {
        return state;
      }
    default:
      return state;
  }
};
