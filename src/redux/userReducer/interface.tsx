interface IUser {
  profileImageId?: string
  profileImageUrl?: string
  totalReviewScore?: number
  nickName: string
  location?: string
  nameAsPerIC?: string
  nric: string
  gender: string
  mobileNumber: string
  email: string
  addressId: string
  addressName: string
  verificationRemark: string
  identityVerificationStatus:
    | 'Unverify'
    | 'Pending'
    | 'Verified'
    | 'Rejected'
    | undefined
  referralCode: string
  country?: string
  countryId?: string
  state?: string
  stateId?: string
  city: string | null
  postalCode?: string
  userId: string
  identityUserId: string
}

// eslint-disable-next-line no-undef
export default IUser
