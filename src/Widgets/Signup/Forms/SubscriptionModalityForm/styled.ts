import styled from 'styled-components';

interface ModalityCardProps {
  selected?: boolean;
}

export const ModalityCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  background: #fff;
  transition: all 0.2s ease-in-out;
  align-self: stretch;
  gap: 0.5rem;
  border: ${({ selected }: ModalityCardProps) => selected ? '1px solid #1a73e8' : '1px solid transparent'};

  .header {
    color: ${({ selected }: ModalityCardProps) => selected ? '#1a73e8' : '#a6a6a6'};
    font-size: 1rem;
    font-weight: 700;
  }

  .price{
    font-size: 2.2rem;
    color: #00cc00;
  }

  :hover{
    background: #1a73e810;
  }

  .benefits-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    color: #a6a6a6;
    font-size: .8rem;

    .benefit{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 0.5rem;

    }
  }

  .check{
    width: 1rem;
    stroke: #88c6a3;
  }
  
  .non-check{
    width: 1rem;
    stroke: #ff4d4d;
  }

`;
