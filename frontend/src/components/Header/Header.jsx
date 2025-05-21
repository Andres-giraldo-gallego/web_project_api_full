import logo from '../../images/Vector.svg';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ handleLogout, handleRegister }) => {
  const currentUser = useContext(CurrentUserContext);

  const location = useLocation();
  return (
    <header className='header'>
      <img src={logo} alt='logo' className='header__logo' />
      <p className='header__email'>{currentUser.email}</p>

      {location.pathname === '/' && (
        <button className='header__logout' onClick={handleLogout}>
          Cerrar sesión
        </button>
      )}
      {location.pathname !== '/' && (
        <button className='header__logout' onClick={handleRegister}>
          {location.pathname.includes('/signin')
            ? 'Registrate'
            : 'Iniciar sesión'}
        </button>
      )}
    </header>
  );
};

export default Header;
