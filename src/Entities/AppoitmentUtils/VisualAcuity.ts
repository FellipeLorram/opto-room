interface EyeInfo {
  rightEye: {
    far: string;
    near: string;
    ph: string;
  };
  leftEye: {
    far: string;
    near: string;
    ph: string;
  };
}

export interface IVisual_acuity {
  CC: EyeInfo;
  SC: EyeInfo;
  usedOptotype: string;
}
