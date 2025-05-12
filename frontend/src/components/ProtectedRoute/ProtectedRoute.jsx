import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children, isLogin }) {
  const navigate = useNavigate();

  if (!isLogin) {
    navigate('/signin');
  }

  return children;
}

export default ProtectedRoute;
