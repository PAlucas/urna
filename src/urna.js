import React from 'react';
import PresidenteDisplay from './components/presidentDisplay'
import './urna.css';

function Urna() {
  return(
    <div>
      <PresidenteDisplay/>
      <div id={votePart}>
          
      </div>
    </div>
  )

}

export default Urna;
