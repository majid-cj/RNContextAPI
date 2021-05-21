export default {
  app_name: 'RNContextAPI',
  button: {
    sign_in: 'sign in',
    join_us: 'join us',
    join: 'join',
    forget_password: 'forget your password ?',
    send_verification_code: 'send verification code',
    return_to_sign_in: 'return to sign in',
    verify_code: 'verify code',
    resend_code: 'resend code',
  },
  menu: {},
  bottom: {},
  field: {},
  label: {
    input: {
      email: 'email',
      password: 'password',
      confirm_password: 'confirm password',
      display_name: 'display name',
      verification_code: 'verification code',
      username: 'username',
    },
    helper: {
      email: 'invalid email',
      password: 'minimum 6 characters, a one special character, a one number',
      confirm_password: 'password mismatch',
      display_name: 'display name cannot be blank',
      verification_code: 'must be 4 digits long',
      username: 'username',
    },
  },
  model: {},
  text: {},
  screen: {},
  error: {
    authentication: {
      verify_code: 'Enter Valid Verification Code',
      email_exist: 'This Email Address is Already Exist',
    },
    general: {
      error: 'Something went wrong',
    },
    validation: {
      username: 'Enter Valid Username',
      display_name: 'Enter Valid Display Name',
      email: 'Enter Valid Email',
      password: 'Enter Valid Password',
      password_mismatch: 'password mismatch',
      verify_code: 'Enter Valid Verification Code',
    },
  },
};
