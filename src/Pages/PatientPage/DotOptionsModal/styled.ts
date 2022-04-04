import styled from "styled-components";
import { ModalContainer } from "../Form/SelectWorkPlaceModal/styled";

export const ModalOptionsContainer = styled(ModalContainer)`
  right: 2%;
  top: 5%;
  width: 7rem;

  .body {
    font-size: .8rem;
    align-items: flex-start;
    padding: 0 .5rem;

    .action-button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      cursor: pointer;
      gap: .3rem;

      span {
        color: #a0a2ae;
        transition: all .2s ease-in-out;
      }

      .action-button-icon {
        width: 1rem;
        height: 1rem;
        stroke: #a0a2ae;
        transition: all .2s ease-in-out;
      }

      :hover {
        span {
          color: #000;
        }
        .action-button-icon {
          stroke: #000;
        }
      }
    }
  }
`;
