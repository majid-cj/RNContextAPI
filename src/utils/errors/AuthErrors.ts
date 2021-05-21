import {strings} from '../../locale';
import {Error} from './types';

export class AuthError implements Error {
  code: string = '1001';
  message: string = strings('error.authentication.verify_code');
}

export class EmailAlreadyExist implements Error {
  code: string = '1002';
  message: string = strings('error.authentication.email_exist');
}
