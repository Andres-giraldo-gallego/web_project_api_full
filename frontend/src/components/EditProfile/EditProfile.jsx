import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

const EditProfile = (props) => {
  const currentUser = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios

    props.handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };

  return (
    <>
      <form className="popup__form" id="popup-form " onSubmit={handleSubmit}>
        <input
          name="name"
          className="popup__name popup__input"
          placeholder="Nombre"
          id="popup-name"
          required
          minLength="2"
          maxLength="40"
          value={name} // Vincula name con la entrada
          onChange={handleNameChange} // Agrega el controlador onChange
        />

        <span id="name-error" className="popup__red"></span>

        <input
          name="about"
          className="popup__about popup__input"
          placeholder="Acerca de mí"
          id="popup-about"
          required
          minLength="2"
          maxLength="200"
          value={description} // Vincula description con la entrada
          onChange={handleDescriptionChange} // Agrega el controlador onChange
        />

        <span id="about-error" className="popup__red"></span>

        <button
          className="popup__Submit-Button button-loading"
          id="popup-Submit-Button"
        >
          Guardar
        </button>
      </form>
    </>
  );
};
export default EditProfile;
