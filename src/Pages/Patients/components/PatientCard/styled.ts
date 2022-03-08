import styled from "styled-components";

export const PatientCardContainer = styled.div`
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
      span{
        :first-of-type{
          color: #838695;
        }
      }
      
    }
  }

  :hover{
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

