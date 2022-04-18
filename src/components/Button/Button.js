import { useNavigate } from 'react-router-dom';

const Button = ({ location }) => {
  const navigate = useNavigate();
  
  return (
    <button
      type="button"
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      Go back
    </button>    
  );
};
export default Button;