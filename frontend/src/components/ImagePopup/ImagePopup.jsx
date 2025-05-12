const ImagePopup = ({ handleOpenImage, selectCard }) => {
  return (
    <div className="dialog" id="dialog">
      <img
        className="dialog__img"
        id="dialog-img"
        onClick={handleOpenImage}
        src={selectCard?.link}
      />
      <div className="dialog__text" id="dialog-text"></div>
    </div>
  );
};
export default ImagePopup;
