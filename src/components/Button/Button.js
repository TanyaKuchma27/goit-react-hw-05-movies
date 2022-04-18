import { useNavigate } from 'react-router-dom';

const Button = ({ location }) => {
    const navigate = useNavigate();
    
    console.log(navigate);
  
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