export type Authentication = {
  id?: string;
  member_type?: number;
  email?: string;
  password?: string;
  confirm_password?: string;
  verified?: boolean;
  on_subscription?: boolean;
  active?: boolean;
  created?: string;
  updated?: string;
};

export type Token = {
  access?: string;
  refresh?: string;
  token_uuid?: string;
  refresh_uuid?: string;
  token_expire?: number;
  refresh_expire?: number;
};

export type SignUp = {
  display_name?: string;
  email?: string;
  password?: string;
  member_type?: number;
};

export type Verification = {
  email?: string;
  code?: string;
  member?: string;
  code_type?: number;
  password?: string;
};

export type UpdatePassword = {
  confirm_password: string;
  password: string;
};
