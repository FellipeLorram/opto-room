import styled from "styled-components";

interface CardProps {
  localColor: 'color1' | 'color2' | 'color3' | 'color4' | 'color5' | 'color6';
}

export const PatientCardContainer = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .header {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    text-transform: capitalize;  
    font-weight: 500;
  }

  .body{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
 
    .info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      font-size: 0.9rem;
      padding: .2rem;
      border-bottom: 1px solid #e3e4e8;

      span{
        :first-of-type{
          color: #838695;
        }
      }
      
    }
  }

  .local {
    span {
      :last-of-type {
        color: ${({theme, localColor}) => theme.colors.localColors[localColor]}
      }
    }
  }
  :hover{
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

