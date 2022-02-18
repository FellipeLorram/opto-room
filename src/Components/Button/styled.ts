import styled from 'styled-components';

interface Props {
  inverse?: boolean;
}

export const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 195px;

  color: ${({ theme, inverse }) => inverse ? theme.colors.button.primary : '#fff'};
  cursor: pointer;
  padding: 0.5rem 4rem;
  outline: none;
  border: none;
  font-size:1rem;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  :hover{
    background: ${({ inverse, theme }) => !inverse ? theme.colors.button.primaryHover : theme.colors.button.inverseHover};
  }

  background: ${({ theme, inverse }) => !inverse ? theme.colors.button.primary : theme.colors.button.inverse};
`;
