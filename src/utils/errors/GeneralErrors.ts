import {strings} from '../../locale';
import {Error} from './types';

export class GeneralError implements Error {
  code: string = '0000';
  message: string = '';

  constructor(
    errorCode: string = '0000',
    errorMessage: string = strings('error.general.error'),
  ) {
    this.code = errorCode;
    this.message = errorMessage;
  }
}
