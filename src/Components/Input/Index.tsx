import React, { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { Eye } from '../../Assets/svgs/Eye';
import { EyeOff } from '../../Assets/svgs/EyeOff';
import { Container } from './styled';

interface Props {
  label: string;
  value: string;
  type: string;
  errorMessage?: string;
  error?: boolean;
  format?: string;
  setValue(value: string): void;
  setType?: { (type: string): void }
}

const Input: React.FC<Props> = ({
  type,
  label,
  value,
  setValue,
  setType,
  error,
  errorMessage,
  format,
}) => {
  const [animate, setAnimate] = useState(!(value === ''));
  const [seePassword, setSeePassword] = useState(false);
  const [errorOnScreen, setErrorOnScreen] = useState(false);

  useEffect(() => {
    if (error) setErrorOnScreen(true);
    if (value) setAnimate(true);
  }, [error, value])

  const handleInputonClick = useCallback(() => setAnimate(true), []);

  const onBlur = useCallback(() => !value && setAnimate(false), [value]);
  const handleEyeOnClick = useCallback(() => {
    if (setType) setType('text');
    setSeePassword(true);
  }, [setType])
  const handleEyeOffOnClick = useCallback(() => {
    if (setType) setType('password');
    setSeePassword(false);
  }, [setType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setErrorOnScreen(false);
  }

  return (
    <Container animate={animate}>
      {!format ? (
        <input
          type={type}
          id={label}
          onClick={handleInputonClick}
          onBlur={onBlur}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
        />
      ) : (
        <NumberFormat
          type="text"
          displayType="input"
          id={label}
          onClick={handleInputonClick}
          onBlur={onBlur}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
          format={format}
        />
      )}

      <div className="error-message">
        {errorOnScreen && (<>{errorMessage}</>)}
      </div>
      {type === 'password' && value && (<Eye onClick={handleEyeOnClick} className="eye" />)}
      {seePassword && (<EyeOff onClick={handleEyeOffOnClick} className="eye" />)}
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

export { Input };
