interface EyeInfo {
  spherical: string;
  cylindrical: string;
  axle: string;
  visual_acuity: string;
}

export interface IRXFinal {
  right_eye: EyeInfo;
  left_eye: EyeInfo;
}
