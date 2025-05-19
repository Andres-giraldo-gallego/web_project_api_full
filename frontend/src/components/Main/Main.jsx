import lapiz from '../../images/Vector (1).svg';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import editperfil from '../../images/Edit Button.png';
import agregarimg from '../../images/Add Button.png';
import Popup from '../Popup/Popup.jsx';
import Card from '../Card/Card.jsx';
import apiInstance from '../../utils/api.js';
import { useEffect, useContext } from 'react';
import NewCard from '../NewCard/NewCard.jsx';

const Main = (props) => {
  const {
    handleClosePopup,
    setPopup,
    handleOpenPopup,
    popup,
    newEditPopup,
    newAvatarPopup,
    imagesPopup,
    DeleteCard,
    cards,
    setCards,
  } = props;

  const userContext = useContext(CurrentUserContext);
  // const { currentUser } = useContext(CurrentUserContext);

  const fetchData = async () => {
    try {
      // Hacemos la solicitud a la API para obtener los datos
      const response = await apiInstance.getInitialCards();

      // Configuramos el estado con los datos recibidos
      setCards(response);
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // El array vacío significa que se ejecuta solo cuando el componente se monta

  const handleCreateCard = (title, link) => {
    if ((title, link == '')) {
      alert('Por favor completar los datos');
    } else {
      apiInstance.createCard({ name: title, link }).then((response) => {
        setCards((state) => [response, ...state]);
        setPopup(null);
      });
    }
  };

  const handleIslikedCard = (Cardid, isLiked) => {
    if (isLiked) {
      apiInstance.dislikeCard(Cardid).then((response) => {
        setCards((state) => {
          return state.map((item) =>
            item._id === response._id ? response : item
          );
        });
      });
    } else {
      apiInstance.likeCard(Cardid).then((response) => {
        setCards((state) => {
          return state.map((item) =>
            item._id === response._id ? response : item
          );
        });
      });
    }
  };

  const newCardPopup = {
    title: 'Nuevo lugar',
    children: <NewCard handleCreateCard={handleCreateCard} />,
  };

  return (
    <div>
      <section className='profile'>
        <div
          className='profile__container'
          onClick={() => handleOpenPopup(newAvatarPopup)}
        >
          <img src={lapiz} alt='lapiz' className='profile__avatar-edit' />

          <img
            src={userContext.avatar}
            alt='Avatar'
            className='profile__avatar'
          />
        </div>
        <div className='profile__content'>
          <div className='profile__info'>
            <p className='profile__name'>{userContext.name}</p>
            <p className='profile__hobbie'>{userContext.about}</p>
          </div>

          <button
            className='profile__edit-button'
            aria-label='Editar perfil'
            onClick={() => handleOpenPopup(newEditPopup)}
          >
            <img
              src={editperfil}
              alt='Botón para editar perfil'
              className='profile__edit-button-img'
            />
          </button>
        </div>
        <button
          className='profile__add-button button-loading'
          aria-label='Agregar nueva imagen'
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            src={agregarimg}
            alt='Botón para agregar nueva imagen'
            className='profile__add-button-img'
          />
        </button>
      </section>
      <section className='elements'>
        <div className='elements__container'>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              imagesPopup={imagesPopup}
              handleOpenImage={handleOpenPopup}
              DeleteCard={DeleteCard}
              handleIslikedCard={handleIslikedCard}
              handleCreateCard={handleCreateCard}
            />
          ))}
        </div>
      </section>

      {popup && (
        <Popup title={popup.title} onClick={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
    </div>
  );
};

export default Main;
