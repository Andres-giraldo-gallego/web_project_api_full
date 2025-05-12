import botebasura from '../../images/Trash.png';
import megusta from '../../images/Group.png';

const Card = (props) => {
  const { link, name, isLiked, _id } = props.card || {};

  const { handleOpenImage, imagesPopup, DeleteCard } = props;

  const cardLikeButtonClassName = `elements_link ${
    isLiked ? 'elements_link-img-active' : ''
  }`;
  const handleCLick = () => {
    handleOpenImage(imagesPopup({ link, name }));
  };

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
      <button className='elements__trash' aria-label='Borrar'>
        <img
          src={botebasura}
          alt='bote de basura'
          className='elements__trash-img'
          onClick={() => handleOpenImage(DeleteCard(_id))}
        />
      </button>

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
