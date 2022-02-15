import styled from 'styled-components';

export const ChooseSignupFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self:  stretch;
  gap: 5rem;
  margin-top: 5vh;
  
  .button-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  
  .typograph{
    font-size: 1.2rem;
    color: #a6a6a6;
  } 
  
  .signin-button{
    width: 300px;
    padding: 1rem 2rem;
    justify-content: space-around;
    gap: 0.5rem;
    background: #fff;
    color: #a6a6a6;
    border: 1px solid transparent;
    :hover {
      border-color: ${({theme}) => theme.colors.secondary};
      background: #f2f2f230;
    }
  }
`;
