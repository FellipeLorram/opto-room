import React, { useEffect, useState } from 'react'
import { Input, InputProps } from '../../../../Components/Input/Index'
import { InputWrapper } from './styled'


const AppoitmentInputWrapper: React.FC<InputProps> = ({
  value,
  setValue,
  label,
}) => {
  const [format, setFormat] = useState('+#.##');
  const [sign, setSign] = useState('+');

  const handleSignClick = () => {
    if (sign === '+') {
      setSign('-');
      setValue(`-${value.substring(1)}`);
      return;
    }

    setSign('+');
    setValue(`+${value.substring(1)}`);

  }

  useEffect(() => {
    setFormat(`${ sign }#.##`);

  }, [sign]);

  return (
    <InputWrapper>
      <span onClick={handleSignClick}>
        {sign}
      </span>
      <Input className='appoitment-input' type='text' label={label} format={format} value={value} setValue={setValue} />

    </InputWrapper>
  )
}

export default AppoitmentInputWrapper