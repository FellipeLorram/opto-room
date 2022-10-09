import { createContext } from "react";
import IAppoitment from "../../../../Entities/Appoitment";
import { IRXFinal } from "../../../../Entities/AppoitmentUtils/RXFinal";
import { IVisual_acuity } from "../../../../Entities/AppoitmentUtils/VisualAcuity";


interface extendedAppoitmentContext extends IAppoitment {
  setRxFinal: React.Dispatch<React.SetStateAction<IRXFinal>>
  setAnamnesis: React.Dispatch<React.SetStateAction<string>>
  setVisualAcuity: React.Dispatch<React.SetStateAction<IVisual_acuity>>
  setFamilyHistory: React.Dispatch<React.SetStateAction<string>>
  setCreatedAt: React.Dispatch<React.SetStateAction<string>>
}

const AppoitmentContext = createContext({} as extendedAppoitmentContext);

export default AppoitmentContext;
