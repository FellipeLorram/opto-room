import styled from "styled-components";
import { localColor } from "../../../Entities/Patient";

export const FormContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  gap: 2rem;

  .input-row-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

  .patient-form-input {
    width: 100%;
   border: 1px solid #ccc;
   box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
   :hover {
     border-color: ${({ theme }) => theme.colors.secondary};
   }
  }

  .work-locals-modal-wrapper {
    align-self: flex-start;
    position: relative;
  }
`;

interface IAddToAWorkPlaceButtonProps {
  background: localColor;
}

const handleColor = (color: string) => {
  return color === 'Default' ? '#00000080' : '#fff'
}

export const AddToAWorkPlaceButton = styled.div<IAddToAWorkPlaceButtonProps>`
  padding: 0.2rem 1.5rem;
  color: ${({ background }) => handleColor(background)};
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: .8rem;
  align-self: flex-start;
  border: 1px solid #ccc;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  letter-spacing: 2px;
  border-radius: 5px;
  background: ${({ background, theme }) => theme.colors.localColors[background]};
  transition: all .2s ease-in-out;
  :hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
