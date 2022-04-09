import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar';
import { MainContainer } from './Container.styled';

const Container = () => {
  return <MainContainer>
    <AppBar />
    <Outlet />
  </MainContainer >;    
}

export default Container;