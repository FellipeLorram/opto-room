import React, { useCallback, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { Search } from '../../Assets/svgs/Search';
import { InputContainer } from './styled';

interface Props {
  value: string;
  setValue(value: string): void;
  disabled?: boolean | undefined;
  search?: boolean;
  label?: string;
  type: string
  format?: string;
  className?: string;
}

const Input: React.FC<Props> = ({
  className,
  type,
  label,
  setValue,
  value,
  search,
  format,
  disabled
}) => {
  const [animate, setAnimate] = useState(!(value === ''));
  useEffect(() => {
    if (value) setAnimate(true);
  }, [value])

  const handleInputOnClick = useCallback(() => setAnimate(true), []);
  const onBlur = useCallback(() => !value && setAnimate(false), [value]);

  return (
    <InputContainer animate={animate} className={className}>
      {!format ? <input
        type={type}
        value={value}
        disabled={disabled}
        onClick={handleInputOnClick}
        onBlur={onBlur}
        id={label}
        onChange={(e) => setValue(e.target.value)}
      /> :
        <NumberFormat
          type="text"
          displayType="input"
          id={label}
          value={value}
          disabled={disabled}
          onClick={handleInputOnClick}
          onBlur={onBlur}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          format={format}
        />

      }
      <label onClick={handleInputOnClick} className="placeholder" htmlFor={label}>
        {label}
      </label>
      {search && (
        <div className='search-button'>
          <Search />
        </div>
      )}
    </InputContainer>
  )
}

export { Input };