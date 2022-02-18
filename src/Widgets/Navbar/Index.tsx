import React from 'react';
import { useLocation } from 'react-router-dom';
import { Board } from '../../Assets/svgs/NavbarIcons/Board';
import { Locals } from '../../Assets/svgs/NavbarIcons/Locals';
import { Lock } from '../../Assets/svgs/NavbarIcons/Lock';
import { Patients } from '../../Assets/svgs/NavbarIcons/Patients';
import { Settings } from '../../Assets/svgs/NavbarIcons/Settings';
import { PatientPlus } from '../../Assets/svgs/PatientPlus';
import { Button } from '../../Components/Button/Index';
import { OptoLogo } from '../../Components/Logo/Index';
import UpgradeCard from '../UpgradeCard/Index';
import { NavBarContainer, NavBarLink } from './styled';

// interface Props {
//   toggle(): void;
// }

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const NavLinks = [
    { block: false, text: 'Dashboard', to: '/', icon: <Board /> },
    { block: false, text: 'Pacientes', to: '/patients', icon: <Patients /> },
    { block: true, text: 'Locais de trabalho', to: '/locals', icon: <Locals /> },
    { block: false, text: 'Configurações', to: '/settings', icon: <Settings /> },
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
          {NavLinks.map(({ text, to, icon, block }) => (
            <NavBarLink key={text} to={to} active={to === pathname}>
              <span className='icon'>
                {icon}
              </span>
              <span className='text'>
                {text}
              </span>
              {block && (
                <span className='block-icon'>
                  <Lock />
                </span>
              )}
            </NavBarLink>
          ))}
        </div>
      </div>
      <UpgradeCard />
    </NavBarContainer>
  );
}

export { Navbar };
