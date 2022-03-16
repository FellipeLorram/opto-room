import { createContext } from "react";
import Patient from "../../../Entities/Patient";

interface PatientContextExtended extends Patient {
  setName: React.Dispatch<React.SetStateAction<string>>
  setAddress: React.Dispatch<React.SetStateAction<string>>
  setAge: React.Dispatch<React.SetStateAction<string>>
  setBirthday: React.Dispatch<React.SetStateAction<string>>
}

export const PatientContext = createContext({} as PatientContextExtended);
