import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  cursor: pointer;
  padding: 0.5rem 4rem;
  outline: none;
  border: none;
  /* border-radius: 8px; */
  font-size:1rem;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :hover{
    background: #1967d2;
  }

  background: ${({ theme }) => theme.colors.secondary}
`;
