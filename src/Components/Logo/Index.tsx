import React from 'react';

import styled from "styled-components";

const Logo = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.logo};
  font-weight: 700;
  font-family: 'Righteous';
  width: 100%;
`;

interface Props {
  style?: React.CSSProperties;
}

const OptoLogo: React.FC<Props> = ({ style }) => {
  return (
    <Logo style={style}>OPTO ROOM</Logo>
  );
}

export { OptoLogo };
