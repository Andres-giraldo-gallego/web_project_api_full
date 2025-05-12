import { useRef } from 'react';

const EditAvatar = (props) => {
  const { handleEditAvatar } = props;
  const inputAvatarRef = useRef(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditAvatar(inputAvatarRef?.current.value);
  };
  return (
    <form className='popup__form' id='popup-form'>
      <input
        name='avatar'
        className='popup__name popup__input'
        placeholder='https://somewebsite.com/someimage.jpg'
        id='popup-avatar'
        required
        minLength='2'
        ref={inputAvatarRef}
      />

      <span id='avatar-error' className='popup__red'></span>

      <button
        className='popup__Submit-Button button-loading'
        id='popup-Submit-Button'
        onClick={handleSubmit}
      >
        Guardar
      </button>
    </form>
  );
};
export default EditAvatar;
