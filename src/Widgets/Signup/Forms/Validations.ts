import { SetStateAction } from 'react';
import validator from 'validator';

function PersonalInfoFormValidate(
  name: string,
  birthday: string,
  cpf: string,
  setErrors: (errorsObject: SetStateAction<{ nameError: boolean; birthDayError: boolean; cpfError: boolean; }>) => void
): Boolean {
  const errors = {
    nameError: false,
    birthDayError: false,
    cpfError: false,
  };

  if (!name) errors.nameError = true;
  if (!birthday) errors.birthDayError = true;
  if (!cpf) errors.cpfError = true;

  setErrors(errors);
  return Object.values(errors).every(key => !key);
};

function AccountInfoFormValidate(
  email: string,
  password: string,
  confirmPassword: string,
  setErrors: (errorsObject: SetStateAction<{
    passwordError: boolean;
    confirmPasswordError: boolean;
    emailError: boolean;
    passwordMessage: string;
    emailMessage: string;
    confirmPasswordMessage: string;
  }>) => void,
): boolean {
  const errors = {
    passwordError: false,
    passwordMessage: '',
    confirmPasswordError: false,
    confirmPasswordMessage: '',
    emailError: false,
    emailMessage: '',
  };

  if (!validator.isEmail(email)) {
    errors.emailError = true;
    errors.emailMessage = 'Insira um e-mail válido'
  };

  if (password.length < 8) {
    errors.passwordError = true;
    errors.passwordMessage = 'A senha precisa ter no mínimo 8 caracteres'
  };

  if (password.length > 55) {
    errors.passwordError = true;
    errors.passwordMessage = 'A senha pode ter no maximo 55 caracteres'
  };

  if (password !== confirmPassword) { 
    errors.confirmPasswordError = true;
    errors.confirmPasswordMessage = 'As senhas precisam ser iguas'
  }

  setErrors(errors);
  return Object.values(errors).every(key => !key);
}

export {
  PersonalInfoFormValidate,
  AccountInfoFormValidate,
}
