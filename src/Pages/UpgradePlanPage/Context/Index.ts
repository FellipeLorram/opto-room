import { createContext } from "react";

interface IScreenMapContext {
  setPreparingCheckoutSessionOnScreen:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScreenMapContext = createContext({} as IScreenMapContext)
