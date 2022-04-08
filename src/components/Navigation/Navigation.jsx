import {StyledLink} from './Navigation.styled';

const Navigation = () => (
  <nav>
    <StyledLink exact to="/">
      Home
    </StyledLink>   

    <StyledLink to="/movies">
      Movies
    </StyledLink>
  </nav>
);

export default Navigation;