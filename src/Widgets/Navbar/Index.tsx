import React from 'react';
import { useLocation } from 'react-router-dom';
import { Board } from '../../Assets/svgs/NavbarIcons/Board';
import { Locals } from '../../Assets/svgs/NavbarIcons/Locals';
import { Patients } from '../../Assets/svgs/NavbarIcons/Patients';
import { Settings } from '../../Assets/svgs/NavbarIcons/Settings';
import { PatientPlus } from '../../Assets/svgs/PatientPlus';
import { Button } from '../../Components/Button/Index';
import { OptoLogo } from '../../Components/Logo/Index';
import { NavBarContainer, NavBarLink } from './styled';

// interface Props {
//   toggle(): void;
// }

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const NavLinks = [
    { text: 'Dashboard', to: '/', icon: <Board /> },
    { text: 'Pacientes', to: '/patients', icon: <Patients /> },
    { text: 'Locais de trabalho', to: '/locals', icon: <Locals /> },
    { text: 'Configurações', to: '/settings', icon: <Settings /> },
  ]

  return (
    <NavBarContainer>
      <div className='header'>
        <OptoLogo className="nav-logo" />
      </div>
      
      <div className='content-top'>
        <Button className='add-patient-button'>
          <span className='text'>
            Adicionar Paciente
          </span>
          <PatientPlus />
        </Button>
        <div className='nav-link-container'>
          {NavLinks.map(({ text, to, icon }) => (
            <NavBarLink key={text} to={to} active={to === pathname}>
              <span className='icon'>
                {icon}
              </span>
              <span className='text'>
                {text}
              </span>
            </NavBarLink>
          ))}
        </div>
      </div>
    </NavBarContainer>
  );
}

export { Navbar };
