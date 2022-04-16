import styled from "styled-components";
import { ModalContainer } from "../../../PatientPage/Form/SelectWorkPlaceModal/styled";

export const DeleteFieldModalContainer = styled(ModalContainer)`
  top: 0;
  right: 0;

  flex-direction: column;

  .delete-field-modal-icon {
    width: 1rem;
    height: 1rem;
    stroke: #ff4d4d;
  }

  .body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .delete-field-modal-text {
    font-size: .8rem;
    cursor: pointer;
    color: #ff4d4d;
  }
`;
