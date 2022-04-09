import styled from "styled-components";

interface FieldProps {
  selected: boolean;
}

export const FieldContainer = styled.div<FieldProps>`
  width: 100%;
  padding: .5rem;
  text-align: center;
  border: ${({ selected }) => selected ? 'none' : '2px solid #a0a2ae90;'}; 
  background: ${({ selected }) => selected ? '#1a73e8' : '#FFF'};
  font-size: .9rem;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border-radius: 1px;
  color: ${({ selected }) => selected ? '#FFF' : '#000'};

  :hover {
    border-color: #1a73e8;
    background: ${({ selected }) => selected ? '#1a73e8' : '#e8f1fd90'};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;
