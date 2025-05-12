const RemoveCard = (props) => {
  const { selectCard, handleSudmidButton } = props;

  return (
    <>
      <div className="popup__form" id="popup-form">
        <h2 className="popup__text">¿Estás seguro/a?</h2>
        <button
          className="popup__Submit-Button button-loading"
          id="popup-delete-button"
          onClick={() => handleSudmidButton(selectCard)}
        >
          Sí
        </button>
      </div>
    </>
  );
};
export default RemoveCard;
