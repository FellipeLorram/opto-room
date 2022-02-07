import React from 'react';
import { Container } from './styled';

interface Props {
  toggle(): void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <Container>
      <div className="content">
        <button onClick={toggle}>ijiji</button>

      </div>
    </Container>
  );
}

export default Navbar;
