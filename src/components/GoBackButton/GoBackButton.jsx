import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const GoBackButton = ({ location }) => {
  const navigate = useNavigate();

  return (
    <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        <FaArrowLeft />
        Go back
    </button>    
  );
};
export default GoBackButton;