export type localColor = 'color1' | 'color2' | 'color3' | 'color4' | 'color5' | 'color6';

export default interface Patient {
  localColor: localColor,
  local: string,
  name: string,
  address: string,
  age: number,
  lastAppoitment: string | Date,
  id: string,
}