interface EyeInfo {
  bruckner: string;
  papilla: string;
  excavation: string;
  AVRatio: string;
  stain: string;
  fixation: string;
}

export interface IOphthalmoscopy {
  rightEye: EyeInfo;
  leftEye: EyeInfo;
}
