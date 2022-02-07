import React from 'react';
import { Wave } from '../../Assets/svgs/Wave';
import { PageContainer } from './styled';

interface Props {
  children?: React.ReactNode
  style?: object;
}

const PageBackground: React.FC<Props> = ({ children, style }) => {
  return <PageContainer style={style}>
    <Wave className="background-wave" />
    {children}
  </PageContainer>;
};

export { PageBackground };
