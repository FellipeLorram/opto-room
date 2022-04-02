import styled from "styled-components";

interface Props {
  CTA: boolean;
}

export const CardContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22rem;
  background: #fff;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  color: #05172e;
  align-self: streech;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .9rem;
    color: #05172e;
    text-align: center;
    width: 100%;
    font-weight: bold;
    padding: .5rem;
  }

  .line-container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    width: 100%;

    .line {
      height: 1px;
      background: #f2f2f2;
      width: 100%;
    }

    .dot {
      width: 5rem;
      height: 3px;
      border-radius: 25% 25% 0 0;
      background: #1A73E8;
    }
  }


  .price-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    color: #05172e;
    padding: 1rem;
    gap: .3rem;
    
    .currency, .price, .month {
      display: flex;
      justify-content: center;
    }
    .currency {
      font-size: .8rem;
      align-items: flex-start;
    }
    .price {
      align-items: center;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  .button-container {
    padding: 1rem;
    
    .card-button {
      font-weight: 700;
      letter-spacing: 2px;
      box-shadow: none;
      padding: 0.5rem 2rem;
      ${({CTA}) => CTA ? '' : `
        font-size: .9rem;
        border: 2px solid #1A73E8;
        color: #1A73E8;
        background: #fff;

        :hover {
          background: hsl(0, 0%, 98%);
        }
      `}
     
    }
  }


  .card-body {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: .6rem;
    padding: 1rem 2rem 2rem;

    .benefit {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: .8rem;
      gap: .3rem;

      .check {
        width: 1rem;
        stroke: #1A73E8;
        stroke-width: 3px;
      }
    }
  }

`;
