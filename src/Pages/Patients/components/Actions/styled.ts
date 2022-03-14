import styled from "styled-components";

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  position: relative;
  .actions-button-container{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: relative;
  }  
`;

export const AppliedFilterIndicator = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a73e8;
  position: absolute;
  top: -0%;
  left: 0;
  border-radius: 50%;
  color: #fff;
`;