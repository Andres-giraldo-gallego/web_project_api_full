import { useState } from 'react';

const NewCard = (props) => {
  const { handleCreateCard } = props;

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCreateCard(title, link);
  };

  return (
    <>
      <form className='popup__form' id='popup-card-form'>
        <input
          name='title'
          className='popup__name popup__input'
          placeholder='Título'
          id='popup-card-name'
          required
          minLength='2'
          maxLength='30'
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />

        <span id='title-error' className='popup__red'></span>

        <input
          name='link'
          className='popup__about popup__input'
          placeholder='Enlace a la imagen'
          id='popup-link'
          required
          type='url'
          value={link}
          onChange={(evt) => setLink(evt.target.value)}
        />
        <span id='link-error' className='popup__red'></span>

        <button
          className='popup__Submit-Button button-loading'
          id='popup-card-Submit-Button'
          onClick={handleSubmit}
        >
          Crear
        </button>
      </form>
    </>
  );
};
export default NewCard;
