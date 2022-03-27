import { createContext } from "react";
import Patient, { localColor } from "../../../Entities/Patient";

interface PatientContextExtended extends Patient {
  setName: React.Dispatch<React.SetStateAction<string>>
  setAddress: React.Dispatch<React.SetStateAction<string>>
  setAge: React.Dispatch<React.SetStateAction<string>>
  setBirthday: React.Dispatch<React.SetStateAction<string>>
  setLocal: React.Dispatch<React.SetStateAction<string>>
  setCpf: React.Dispatch<React.SetStateAction<string>>
  setLocalColor: React.Dispatch<React.SetStateAction<localColor>>
}

export const PatientContext = createContext({} as PatientContextExtended);
