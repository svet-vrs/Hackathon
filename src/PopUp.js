//#PopUp.js
import React from 'react';

const PopUp = ({ handleOpenPflegeantrag }) => {
  return (
    <div className='pflegeantrag-wrapper d-flex align-items-center'>
      <div className="pflegeantrag-popup">
        <p>Pflegeantrag öffnen?</p>
        <button onClick={handleOpenPflegeantrag}>Ja</button>
      </div>
    </div>
  );
};

export default PopUp;
