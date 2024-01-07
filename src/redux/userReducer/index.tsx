import {
  SET_USER_PROFILE,
  SET_USER_PROFILE_PICTURE,
  USER_LOGOUT,
} from './constants'
import IUser from './interface'

const INITIAL_STATE: IUser = {
  profileImageId: '',
  profileImageUrl: '',
  totalReviewScore: 0,
  nickName: 'Guest',
  location: '',
  nameAsPerIC: '',
  nric: '',
  gender: '',
  mobileNumber: '',
  email: '',
  addressId: '00000000-0000-0000-0000-000000000000',
  addressName: '',
  verificationRemark: '',
  identityVerificationStatus: 'Unverify',
  postalCode: '',
  country: '',
  countryId: '',
  state: '',
  stateId: '',
  city: '',
  userId: '',
  identityUserId: '',
  referralCode: '',
}

interface baseActionProps {
  type: string
  payload: any
}

const userReducer = (state = INITIAL_STATE, action: baseActionProps) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_USER_PROFILE_PICTURE: {
      return {
        ...state,
        profileImageUrl: action.payload,
      }
    }
    case USER_LOGOUT: {
      return INITIAL_STATE
    }
    default:
      return state
  }
}

export default userReducer
