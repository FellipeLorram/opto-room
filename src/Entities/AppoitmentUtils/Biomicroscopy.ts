interface EyeInfo {
  eyebrow: string;
  eyelids: string;
  eyelashes: string;
  cornea: string;
  conjunctiva: string;
  sclera: string;
  cristalino: string;
  pupil: string;
}

export interface IBiomicroscopy {
  right_eye: EyeInfo;
  left_eye: EyeInfo;
}
