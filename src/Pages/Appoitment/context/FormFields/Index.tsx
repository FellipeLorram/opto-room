import React, { createContext, useState } from "react";

interface IFormFieldContext {
  visualAcuityOnScreen: boolean;
  familyHistoryOnScreen: boolean;
  ophthalmoscopyOnScreen: boolean;

  setfamilyHistoryOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setOphthalmoscopyOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
  setVisualAcuityOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormFieldContext = createContext({} as IFormFieldContext);

const FormFieldContextWrapper: React.FC = ({ children }) => {
  const [familyHistoryOnScreen, setfamilyHistoryOnScreen] = useState(false);
  const [visualAcuityOnScreen, setVisualAcuityOnScreen] = useState(false);
  const [ophthalmoscopyOnScreen, setOphthalmoscopyOnScreen] = useState(false);

  const contextValue = {
    familyHistoryOnScreen,
    visualAcuityOnScreen,
    setfamilyHistoryOnScreen,
    setVisualAcuityOnScreen,
    ophthalmoscopyOnScreen,
    setOphthalmoscopyOnScreen
  }

  return <FormFieldContext.Provider value={contextValue}>
    {children}
  </FormFieldContext.Provider>
}

export default FormFieldContextWrapper;
