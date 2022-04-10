interface EyeInfo {
  spherical: string;
  cylindrical: string;
  axle: string;
  visualAcuity: string;
}

export interface IRXFinal {
  rightEye: EyeInfo;
  leftEye: EyeInfo;
}
