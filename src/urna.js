import React from 'react';
import PresidenteDisplay from './components/presidentDisplay'
import ButtonsVote from './components/buttonsVote'
import ButtonsOptions from './components/buttonsOptions'
import './urna.css';
import Brasao from './images/brasao.jpg'


function Urna() {
  const votePart = 'votePart'
  const toVote = 'toVote'
  const content = 'content'
  const header = 'header'
  const frase = 'frase'
  const brasao = 'brasao'
  const options = 'options'

  return (
    <div id={content}>
      <PresidenteDisplay />
      <div id={votePart}>
        <header id={header}>
          <div >
            <img id={brasao} src={Brasao}></img>
          </div>
          <div id={frase}>
            <span>Justiça</span>
            <span>Eleitoral</span>
          </div>
        </header>
        <div id={toVote}>
          <ButtonsVote label={1} />
          <ButtonsVote label={2} />
          <ButtonsVote label={3} />
          <ButtonsVote label={4} />
          <ButtonsVote label={5} />
          <ButtonsVote label={6} />
          <ButtonsVote label={7} />
          <ButtonsVote label={8} />
          <ButtonsVote label={9} />
          <ButtonsVote label={0} zero/>
        </div>
        <div id={options}>
          <ButtonsOptions branco label={'Branco'}/>
          <ButtonsOptions cancelar label={'Cancelar'}/>
          <ButtonsOptions confirmar label={'Confirmar'}/>
        </div>
      </div>
    </div>
  )

}

export default Urna;
