interface EyeInfo {
  right_eye: {
    far: string;
    near: string;
    ph: string;
  };
  left_eye: {
    far: string;
    near: string;
    ph: string;
  };
}

export interface IVisual_acuity {
  CC: EyeInfo;
  SC: EyeInfo;
  used_optotype: string;
}
