import React from 'react';
import styled from 'styled-components';

import { CommentContainer } from '../../Assets/Comment/Index';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;

  .left-1 {
    position: absolute;
    left: 5%;
    top: 20%;
  }
  .left-2 {
    position: absolute;
    left: 5%;
    bottom: 10%;
  }

  .right-1 {
    position: absolute;
    right: 5%;
    top: 20%;
  }
  .right-2 {
    position: absolute;
    right: 7%;
    bottom: 20%;
  }
`;

const UsersComment: React.FC = () => {
  const usersComment = [
    { rotate: [-2, -1, 0, -1], user: '- Fábio Nogueira', comment: 'Cara, que plataforma!!! A agilidade e a organização que ganho em cada consulta não tem preço! Parabéns!!', className: 'right-1' },
    { rotate: [2, -1, 0, 1], user: '- Maria Alzair', comment: 'Por que eu não comecei a utilizar isso antes??', className: 'left-1' },
    { rotate: [2, 1, 0, -1], user: '- Samuel Bezerra', comment: 'Muito bom!! A melhor parte e o profissionalismo que passamos pro paciente.', className: 'right-2' },
    { rotate: [2, 1, 2, 0], user: '- Peterson Teixeira', comment: 'Me surpreendeu bastante.. Não espera um app tão bom por esse preço.', className: 'left-2' },
  ]
  return <Wrapper>
    {usersComment.map(({ user, comment, className, rotate }) => (
      <CommentContainer rotate={rotate} className={className}>
        <b>{comment}</b>
        <br />
        {user}
      </CommentContainer>
    ))}
  </Wrapper>;
};

export { UsersComment };
