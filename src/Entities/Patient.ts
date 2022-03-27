export type localColor = 'color1' | 'color2' | 'color3' | 'color4' | 'color5' | 'color6' | 'Default';

export default interface Patient {
  localColor?: localColor,
  local?: string,
  name: string,
  address: string,
  age: string,
  cpf: string,
  lastAppoitment?: string | Date,
  id?: string,
  birthday?: string
}
