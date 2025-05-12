import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { useState, useEffect } from 'react';
import Main from '../Main/Main.jsx';
import apiInstance from '../../utils/api.js';
import EditProfile from '../EditProfile/EditProfile.jsx';
import EditAvatar from '../EditAvatar/EditAvatar.jsx';
import ImagePopup from '../ImagePopup/ImagePopup.jsx';
import RemoveCard from '../RemoveCard/RemoveCard.jsx';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { getUserInfo, signin, signup } from '../../utils/auth.js';
import InfoTooltip from '../Popup/InfoTooltip/InfoTooltip.jsx';
import cierre from '../../images/Close Icon.svg';
import { use } from 'react';

function App() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);
  const [CurrentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [token, setToken] = useState('');
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [isInfoSuccess, setIsInfoSuccess] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const fechUser = async () => {
    const responseUser = await apiInstance.getUserInfo();

    return responseUser;
  };

  const handleEditAvatar = (avatar) => {
    if (avatar == '') {
      alert('Por favor rellenar la URL');
    } else {
      apiInstance.editAvatarUser(avatar).then((response) => {
        setCurrentUser(response);
        setPopup(null);
      });
    }
  };

  useEffect(() => {
    if (isLogin) {
      fechUser().then((data) => {
        getUserInfo().then((response) => {
          setCurrentUser({ ...data, email: response.email });
          navigate('/');
        });
      });
    }
  }, [isLogin]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await apiInstance.editUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        setPopup(null);
      });
    })();
  };

  const newAvatarPopup = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar handleEditAvatar={handleEditAvatar} />,
  };

  const newEditPopup = {
    title: 'Editar perfil',
    children: <EditProfile handleUpdateUser={handleUpdateUser} />,
  };
  const imagesPopup = (selectCard) => ({
    children: <ImagePopup selectCard={selectCard} />,
  });

  const DeleteCard = (selectCard) => ({
    children: (
      <RemoveCard
        selectCard={selectCard}
        handleSudmidButton={handleSudmidButton}
      />
    ),
  });
  const handleSudmidButton = (selectCard) => {
    apiInstance.deleteCard(selectCard).then(() => {
      setCards((state) => state.filter((item) => item._id !== selectCard));
      setPopup(null);
    });
  };
  const handleOpenPopup = (popup) => {
    setPopup(popup);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  const handleSignup = (email, password) => {
    signup(email, password).then((response) => {
      setInfoIsOpen(true);
      if (response.token) {
        setIsInfoSuccess(false);
        setToken(response.token);
      } else {
        setIsInfoSuccess(true);
      }
    });
  };

  const handleSignin = (email, password) => {
    signin(email, password).then((response) => {
      if (!response.token) {
        setIsInfoSuccess(false);
        setInfoIsOpen(true);
        setIsLogin(false);
      } else {
        setInfoIsOpen(false);
        setToken(response.token);
        localStorage.setItem('token', response.token);
        setIsLogin(true);
        navigate('/');
      }
    });
  };
  const handleLogout = () => {
    setIsLogin(false);
    setToken('');
    localStorage.removeItem('token');
    setCurrentUser({});
    navigate('/signin');
  };

  const handleRegister = () => {
    if (location.pathname === '/signin') {
      navigate('/signup');
    } else {
      navigate('/signin');
    }
  };

  const handleCloseInfo = () => {
    setInfoIsOpen(false);
    if (isInfoSuccess) {
      navigate('/signin');
    }
  };

  return (
    <>
      <CurrentUserContext.Provider value={CurrentUser}>
        <div>
          <div className='page'>
            <Header
              handleLogout={handleLogout}
              handleRegister={handleRegister}
            />
            {infoIsOpen && (
              <div className='popup__infoTolltip'>
                <div className='popup__open-infoTooltip'>
                  <button className='popup__close' onClick={handleCloseInfo}>
                    <img
                      id='popup-x'
                      src={cierre}
                      className='popup__form-img'
                      alt='boton de cierre'
                    />
                  </button>
                </div>
                <InfoTooltip isSuccess={isInfoSuccess} />
              </div>
            )}
            <Routes>
              <Route
                path='/signin'
                element={<Login handleSignin={handleSignin} />}
              />
              <Route
                path='/signup'
                element={<Register handleSignup={handleSignup} />}
              />

              <Route
                path='/'
                element={
                  <ProtectedRoute isLogin={isLogin}>
                    <Main
                      handleOpenPopup={handleOpenPopup}
                      handleClosePopup={handleClosePopup}
                      popup={popup}
                      newAvatarPopup={newAvatarPopup}
                      newEditPopup={newEditPopup}
                      imagesPopup={imagesPopup}
                      DeleteCard={DeleteCard}
                      setPopup={setPopup}
                      cards={cards}
                      setCards={setCards}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
      ;
    </>
  );
}

export default App;
