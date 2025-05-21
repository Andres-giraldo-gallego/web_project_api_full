import botebasura from '../../images/Trash.png';

const ElementTrash = (props) => {
  const { handleOpenImage, DeleteCard, _id } = props;
  return (
    <button className='elements__trash ' aria-label='Borrar'>
      <img
        src={botebasura}
        alt='bote de basura'
        className='elements__trash-img'
        onClick={() => handleOpenImage(DeleteCard(_id))}
      />
    </button>
  );
};

export default ElementTrash;
