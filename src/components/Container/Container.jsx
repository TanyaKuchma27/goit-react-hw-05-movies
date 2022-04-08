import {MainContainer} from './Container.styled';
import propTypes from 'prop-types';

const Container = ({ children }) => {
    return <MainContainer> { children }</MainContainer >;    
}

Container.propTypes = {
  children: propTypes.element.isRequired,
};

export default Container;