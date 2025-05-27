import megusta from '../../images/Group.png';
import ElementTrash from './ElementTrash.jsx';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

const Card = (props) => {
  const userContext = useContext(CurrentUserContext);
  const { link, name, _id, likes, owner } = props.card || {};
  const isLiked = likes && likes.length > 0;
  const { handleOpenImage, imagesPopup, DeleteCard } = props;

  const cardLikeButtonClassName = `elements_link ${
    isLiked ? 'elements_link-img-active' : ''
  }`;
  const handleCLick = () => {
    handleOpenImage(imagesPopup({ link, name }));
  };

  const ownerId = owner._id || owner;

  return (
    <div className='elements_card'>
      <div className='elements_img-container'>
        <img
          src={link}
          alt={name}
          className='elements_img'
          onClick={handleCLick}
        />
      </div>

      {ownerId == userContext._id && (
        <ElementTrash
          handleOpenImage={handleOpenImage}
          DeleteCard={DeleteCard}
          selectCard={handleCLick}
          _id={_id}
        />
      )}

      <div className='elements_info'>
        <p className='elements_text'>{name}</p>
        <button className='elements_link' aria-label='Me gusta'>
          <img
            src={megusta}
            alt='corazon me gusta'
            className={cardLikeButtonClassName}
            onClick={() => props.handleIslikedCard(_id, isLiked)}
          />
        </button>
      </div>
    </div>
  );
};
Card.defaultProps = {
  isLiked: false,
};
export default Card;
