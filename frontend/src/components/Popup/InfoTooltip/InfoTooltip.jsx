import Exitoso from '../../../images/Exitoso.svg';
import Mal from '../../../images/Mal.svg';
import { useState } from 'react';

const InfoTooltip = (props) => {
  const [isSuccess] = useState(props.isSuccess);

  return (
    <div className='info-tooltip'>
      <img
        src={isSuccess ? Exitoso : Mal}
        alt='Exitoso'
        className='info-tooltip-img'
      />
    </div>
  );
};

export default InfoTooltip;
