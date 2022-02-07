import { SetStateAction } from "react";

function PersonalInfoFormValidate(
  name: string,
  birthday: string,
  cpf: string,
  setErrors: (errorsObject: SetStateAction<{ nameError: boolean; birthDayError: boolean; cpfError: boolean; }>) => void
): void {
  const errors = {
    nameError: false,
    birthDayError: false,
    cpfError: false,
  };

  if (!name) errors.nameError = true;
  if (!birthday) errors.birthDayError = true;
  if (!cpf) errors.cpfError = true;

  setErrors(errors);
};

export {
  PersonalInfoFormValidate,
}
