import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  height: 100%;  
  width: 12rem;

  display: grid;
  place-items: center;

  padding-left: 1rem;

  .content{ 

    width: 100%;
    height: 95%;

    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
`; 
