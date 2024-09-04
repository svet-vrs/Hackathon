//#PopUp.js
import React from 'react';

const PopUp = ({ handleOpenPflegeantrag }) => {
  return (
    <div className="pflegeantrag-popup">
      <p>Pflegeantrag öffnen?</p>
      <button onClick={handleOpenPflegeantrag}>Ja</button>
    </div>
  );
};

export default PopUp;
