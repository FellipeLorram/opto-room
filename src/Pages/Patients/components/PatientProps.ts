export type localColor = 'color1' | 'color2' | 'color3' | 'color4' | 'color5' | 'color6';

export default interface PatientProps {
  name: string;
  age: number;
  address: string;
  lastAppoitment: string;
  id: string;
  local: string;
  localColor: localColor;
}
