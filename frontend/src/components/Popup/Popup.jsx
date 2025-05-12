import cierre from '../../images/Close Icon.svg';

const Popup = (props) => {
  const { title, children, onClick } = props;
  return (
    <div className='popup'>
      <div
        className={` ${title ? 'popup__container' : 'popup__imageContainer'}`}
      >
        <button
          className='popup__form-x popup__close-btn'
          id='popup-card-form-x'
          type='button'
          onClick={onClick}
        >
          <img
            id='popup-x'
            src={cierre}
            className='popup__form-img'
            alt='boton de cierre'
          />
        </button>
        {title && <h2 className='popup__text'>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default Popup;
