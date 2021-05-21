import {ValidationError} from './types';

export class ValidationFormError implements ValidationError {
  codes: Array<string> = [];
}
