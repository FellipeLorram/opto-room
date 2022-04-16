import { createContext } from "react";
import IAppoitment from "../../../../Entities/Appoitment";
import { IRXFinal } from "../../../../Entities/AppoitmentUtils/RXFinal";


interface extendedAppoitmentContext extends IAppoitment {
  setRxFinal: React.Dispatch<React.SetStateAction<IRXFinal>>
  setAnamnesis: React.Dispatch<React.SetStateAction<string>>
}

const AppoitmentContext = createContext({} as extendedAppoitmentContext);

export default AppoitmentContext;
