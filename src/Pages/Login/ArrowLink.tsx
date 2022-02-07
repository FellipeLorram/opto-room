import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight } from '../../Assets/svgs/ArrowRight';

const Wrapper = styled.div`
  font-size: .8rem;
  color: #00000070;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  gap: 5px;
  span{
    text-decoration: none;
    color: #a6a6a6;
    transition: all 0.2s ease-in-out;
  }
  .arrow {
    width: 1.6rem;
    stroke: #a6a6a6;
    transition: all 0.2s ease-in-out;
  }
  :hover {
    span{
      color: #808080;
    }
    .arrow {
      stroke: #808080;
    }
  }
`;

interface Props {
  text: string;
  onClick?: { (): void }
}

const ArrowLink: React.FC<Props> = ({ text, onClick }) => {
  return <Wrapper onClick={onClick}>
    <span>{text}</span>
    <ArrowRight className="arrow" />
  </Wrapper>;
};

export default ArrowLink;
