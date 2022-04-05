interface EyeInfo {
  bruckner: string;
  papilla: string;
  excavation: string;
  AV_ratio: string;
  stain: string;
  fixation: string;
}

export interface IOphthalmoscopy {
  right_eye: EyeInfo;
  left_eye: EyeInfo;
}
