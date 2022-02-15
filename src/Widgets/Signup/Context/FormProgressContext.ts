import { createContext } from "react";

interface IFormProgressContext {
  EmailFormStepOnScreen: boolean;
  setEmailFormStepOnScreen(value: boolean): void;
  PlanSubscriptionFormOnScreen: boolean;
  setPlanSubscriptionFormOnScreen(value: boolean): void;
  formEmailVerifyStep: boolean;
  setFormEmailVerifyStep(value: boolean): void;
}

export const FormProgressContext = createContext({} as IFormProgressContext)