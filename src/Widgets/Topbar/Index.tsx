import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { TopbarContainer } from './styled';

const Topbar: React.FC = () => {
  const { pathname } = useLocation();
  const [currentLocation, setCurrentLocation] = useState(pathname);

  useEffect(() => {
    if (pathname === '/') {
      setCurrentLocation('Dashboard');
      return;
    };
    if (pathname === '/patients') {
      setCurrentLocation('Pacientes');
      return;
    };
    if (pathname === '/locals') {
      setCurrentLocation('Locais de trabalho');
      return;
    };
    if (pathname === '/settings') {
      setCurrentLocation('Configurações');
      return;
    };
    if (pathname === '/new-patient') {
      setCurrentLocation('Adicionar Paciente');
      return;
    };
    return () => {
      setCurrentLocation('');
    }
  }, [pathname])


  return (
    <TopbarContainer>
      {currentLocation}
    </TopbarContainer>
  )
}

export { Topbar };