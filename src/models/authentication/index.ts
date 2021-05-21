import {MEMBER_TYPE, VERIFICATION_CODE} from '../../constants';
import {ValidationFormError} from '../../utils/errors';
import {InputValidator} from '../../utils/validators';
import {
  Authentication,
  SignUp,
  Token,
  UpdatePassword,
  Verification,
} from './types';

class AuthenticationModel implements Authentication {
  private _id = '';
  private _member_type = MEMBER_TYPE.USER;
  private _email = '';
  private _password = '';
  private _confirm_password = '';
  private _verified = false;
  private _on_subscription = false;
  private _active = false;
  private _created = '';
  private _updated = '';

  public set id(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set member_type(member_type: number) {
    this._member_type = member_type;
  }

  public get member_type(): number {
    return this._member_type;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get password(): string {
    return this._password;
  }

  public set confirm_password(confirm_password: string) {
    this._confirm_password = confirm_password;
  }

  public get confirm_password(): string {
    return this._confirm_password;
  }

  public set verified(verified: boolean) {
    this._verified = verified;
  }

  public get verified(): boolean {
    return this._verified;
  }

  public set on_subscription(on_subscription: boolean) {
    this._on_subscription = on_subscription;
  }

  public get on_subscription(): boolean {
    return this._on_subscription;
  }

  public set active(active: boolean) {
    this._active = active;
  }

  public get active(): boolean {
    return this._active;
  }

  public set created(created: string) {
    this._created = created;
  }

  public get created(): string {
    return this._created;
  }

  public set updated(updated: string) {
    this._updated = updated;
  }

  public get updated(): string {
    return this._updated;
  }

  public validateSignIn(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validateEmail(this.email)) {
      errors.codes.push('0003');
    }

    if (InputValidator.validatePassword(this.password)) {
      errors.codes.push('0004');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }
}

class TokenModel implements Token {
  private _access = '';
  private _refresh = '';
  private _token_uuid = '';
  private _refresh_uuid = '';
  private _token_expire = 0;
  private _refresh_expire = 0;

  public set access(access: string) {
    this._access = access;
  }

  public get access(): string {
    return this._access;
  }

  public set refresh(refresh: string) {
    this._refresh = refresh;
  }

  public get refresh(): string {
    return this._refresh;
  }

  public set token_uuid(token_uuid: string) {
    this._token_uuid = token_uuid;
  }

  public get token_uuid(): string {
    return this._token_uuid;
  }

  public set refresh_uuid(refresh_uuid: string) {
    this._refresh_uuid = refresh_uuid;
  }

  public get refresh_uuid(): string {
    return this._refresh_uuid;
  }

  public set token_expire(token_expire: number) {
    this._token_expire = token_expire;
  }

  public get token_expire(): number {
    return this._token_expire;
  }

  public set refresh_expire(refresh_expire: number) {
    this._refresh_expire = refresh_expire;
  }

  public get refresh_expire(): number {
    return this._refresh_expire;
  }
}

class SignUpModel implements SignUp {
  private _display_name = '';
  private _email = '';
  private _password = '';
  private _member_type = MEMBER_TYPE.USER;

  public set display_name(display_name: string) {
    this._display_name = display_name;
  }

  public get display_name(): string {
    return this._display_name;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get password(): string {
    return this._password;
  }

  public set member_type(member_type: number) {
    this._member_type = member_type;
  }

  public get member_type(): number {
    return this._member_type;
  }

  public validateSignUp(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validateInputLength(this.display_name)) {
      errors.codes.push('0002');
    }

    if (InputValidator.validateEmail(this.email)) {
      errors.codes.push('0003');
    }

    if (InputValidator.validatePassword(this.password)) {
      errors.codes.push('0004');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }
}

class VerificationModel implements Verification {
  private _email = '';
  private _code = '';
  private _member = '';
  private _code_type = VERIFICATION_CODE.NEW_USER;
  private _password = '';

  public set email(email: string) {
    this._email = email;
  }

  public get email(): string {
    return this._email;
  }

  public set code(code: string) {
    this._code = code;
  }

  public get code(): string {
    return this._code;
  }

  public set member(member: string) {
    this._member = member;
  }

  public get member(): string {
    return this._member;
  }

  public set code_type(code_type: number) {
    this._code_type = code_type;
  }

  public get code_type(): number {
    return this._code_type;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get password(): string {
    return this._password;
  }

  public validateEmail(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validateEmail(this.email)) {
      errors.codes.push('0003');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }

  public validateVerifyCode(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validateVerifyCode(this.code)) {
      errors.codes.push('0006');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }

  public validateVerifyCodeAndPassword(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validateVerifyCode(this.code)) {
      errors.codes.push('0006');
    }

    if (InputValidator.validatePassword(this.password)) {
      errors.codes.push('0004');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }
}

class UpdatePasswordModel implements UpdatePassword {
  private _confirm_password = '';
  private _password = '';

  public set confirm_password(confirm_password: string) {
    this._confirm_password = confirm_password;
  }

  public get confirm_password(): string {
    return this._confirm_password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get password(): string {
    return this._password;
  }

  public validateVerifyCode(): void {
    const errors = new ValidationFormError();
    if (InputValidator.validatePassword(this.password)) {
      errors.codes.push('0004');
    }

    if (this.password !== this.confirm_password) {
      errors.codes.push('0005');
    }

    if (errors.codes.length > 0) throw errors.codes;
  }
}

export {
  AuthenticationModel,
  TokenModel,
  SignUpModel,
  VerificationModel,
  UpdatePasswordModel,
};
