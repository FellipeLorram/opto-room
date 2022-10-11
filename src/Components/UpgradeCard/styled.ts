import styled from "styled-components";

export const UpgradeCardContainer = styled.div`
margin-top: 1rem;
.shadow-wrapper{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0 0 10px 10px;
}
  width: 100%;
  padding: 1rem;
  .content{
    width: 100%;
    text-align: center;
    color: #fff;
    gap: 1rem;
    position: relative;
    border-radius: 10px 10px 0 0;
    background: ${({ theme }) => theme.colors.secondary};
    padding: 3rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .2s ease-in-out;
    cursor: pointer;

    .animation{
      position: absolute;
      top: -4rem;
      width: 100%;

    }

    .upgrade-text-container {
      h3{
        font-size: .9rem;
        font-weight: bold;
      }
      p{
        font-size: .8rem;
      }
    }
    :hover{
      background: ${({ theme }) => theme.colors.button.primaryHover};
    }
  }
  .upgrade-button{
    width: 100%;
    text-align: center;
    padding: .5rem;
    font-size: 1rem;
    background: #fff;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    font-weight: 700;
    transition: all .2s ease-in-out;
    :hover{
      background: #f2f2f280;
    }
  }
  .header {
    width: 100%;

  }
`; 