import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SearchInput } from '../../Components/SearchInput/Index';
import { TopbarContainer } from './styled';

const Topbar: React.FC = () => {
  const { pathname } = useLocation();
  const [currentLocation, setCurrentLocation] = useState(pathname);
  const [Search, setSearch] = useState('');

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
    return () => {
      setCurrentLocation('');
    }
  }, [pathname])


  return (
    <TopbarContainer>
      {currentLocation}
      <SearchInput value={Search} setValue={setSearch}/>
    </TopbarContainer>
  )
}

export { Topbar };