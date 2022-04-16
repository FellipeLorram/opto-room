import React, { createContext, useState } from "react";

interface IFormFieldContext {
  familyHistoryOnScreen: boolean;
  setfamilyHistoryOnScreen: React.Dispatch<React.SetStateAction<boolean>>

}

export const FormFieldContext = createContext({} as IFormFieldContext);

const FormFieldContextWrapper: React.FC = ({ children }) => {
  const [familyHistoryOnScreen, setfamilyHistoryOnScreen] = useState(false);

  const contextValue = {
    familyHistoryOnScreen,
    setfamilyHistoryOnScreen,
  }

  return <FormFieldContext.Provider value={contextValue}>
    {children}
  </FormFieldContext.Provider>
}

export default FormFieldContextWrapper;
