import { TDynamicFormValidatorCallback } from '../dynamic-form.interfaces';

export class DynamicFormValidator {
  private nameValue: string;
  private messageValue: string;
  private validateFn: TDynamicFormValidatorCallback;

  constructor(
    name: string,
    message: string,
    validate: TDynamicFormValidatorCallback
  ) {
    this.nameValue = name;
    this.messageValue = message;
    this.validateFn = validate;
  }

  get name(): string {
    return this.nameValue;
  }

  get message(): string {
    return this.messageValue;
  }

  get validate(): TDynamicFormValidatorCallback {
    return this.validateFn;
  }
}
