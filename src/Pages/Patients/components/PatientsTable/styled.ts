import styled from "styled-components";

export const PatientTableContainer = styled.table`
  width: 100%;
  background: #fff;
  border-spacing: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  
  
  th, td {
    text-align: left;
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
    border-bottom: 1px solid #d9d9d9;
  }

  tr td {
    cursor: pointer;
    font-size: 1rem;
    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid transparent;
    transition: all .2s ease-in-out;
    :hover{
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .row {
    td{
      :first-child {
        border-left: 1px solid transparent;
      }
      :last-child {
        border-right: 1px solid transparent;
      }
    }
  }

  .row:hover{
    td {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

`;