import {Authentication, Token} from '../../../models/authentication/types';
import {Profile} from '../../../models/profile/types';

export type AuthenticationResponse = {
  data: {
    token: Token;
    member: Authentication;
    profile: Profile;
  };
};

export type VerificationResponse = {
  data: any;
};

export type RefreshTokenResponse = {
  data: Token;
};
