import { ICeratometry } from './AppoitmentUtils/Ceratometry';
import { IDuctions } from './AppoitmentUtils/Ductions';
import { IKappa } from './AppoitmentUtils/Kappa';
import { IOphthalmoscopy } from './AppoitmentUtils/Ophthalmoscopy';
import { IPupillaryRreflexes } from './AppoitmentUtils/PupillaryRreflexes';
import { IRXFinal } from './AppoitmentUtils/RXFinal';
import { IVisual_acuity } from './AppoitmentUtils/VisualAcuity';


export interface IAppoitment {
  anamnesis: string;
  rx_final: IRXFinal;
  patient_ref: string;

  family_history?: string;
  visual_acuity?: IVisual_acuity;
  ophthalmoscopy?: IOphthalmoscopy;
  pupillaryRreflexes?: IPupillaryRreflexes;
  ductions?: IDuctions;
  kappa?: IKappa;
  ceratometry?: ICeratometry;
}