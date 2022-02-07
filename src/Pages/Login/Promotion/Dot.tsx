import React, { useCallback } from 'react';
import { DotContainer } from './styled';

interface Props {
  index: number;
  active: boolean;
  setOnScreen(onScreen: boolean[] | ((arr: boolean[]) => void)): void;
}

const Dot: React.FC<Props> = ({ active, setOnScreen, index }) => {
  const handleDotClick = useCallback(() => {
    setOnScreen(() => {
      const newArr = [false, false, false];
      newArr[index] = true;
      return newArr;
    })
  }, [setOnScreen, index])

  return <DotContainer onClick={handleDotClick} active={active} />;
};

export default Dot;
