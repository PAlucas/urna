import React, { useState } from 'react';
import PresidenteDisplay from './components/presidentDisplay'
import ButtonsVote from './components/buttonsVote'
import ButtonsOptions from './components/buttonsOptions'
import './urna.css';
import Brasao from './images/brasao.jpg'
import Bolsonaro from './images/bolsonaro.jpg'
import Haddad from './images/Haddad.jpg'


function Urna (){
  const votePart = 'votePart'
  const toVote = 'toVote'
  const content = 'content'
  const header = 'header'
  const frase = 'frase'
  const brasao = 'brasao'
  const options = 'options'

  const [number1,setNumber1] = useState('')
  const [number2,setNumber2] = useState('')
  const [nomePresidente,setPresidente] = useState('')
  const [imgPresidente,setImgPresidente] = useState('')

  const addnumber = (a)=>{
    if(!number1){
      setNumber1(a)
    }else if(!number2){
      setNumber2(a)
      console.log(number1,a)
      if(number1==='1' && a==='7'){
        setPresidente('Jair Bolsonaro')
        setImgPresidente(Bolsonaro)
      }
      if(number1==='1'&&a==='3'){
        setPresidente('Fernando Haddad')
        setImgPresidente(Haddad)
      }
    }else{
      return
    }
  }

  const cancelar = () =>{
    setNumber1('')
    setNumber2('')
    setPresidente('')
    setImgPresidente('')
  }

  return (
    <div id={content}>
      <PresidenteDisplay number1={number1} number2={number2} nomePresidente={nomePresidente} img={imgPresidente}/>
      <div id={votePart}>
        <header id={header}>
          <div >
            <img id={brasao} src={Brasao} alt={brasao}></img>
          </div>
          <div id={frase}>
            <span>Justiça</span>
            <span>Eleitoral</span>
          </div>
        </header>
        <div id={toVote}>
          <ButtonsVote label={'1'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'2'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'3'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'4'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'5'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'6'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'7'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'8'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'9'} click={label=>addnumber(label)}/>
          <ButtonsVote label={'0'} zero click={label=>addnumber(label)}/>
        </div>
        <div id={options}>
          <ButtonsOptions branco label={'Branco'}/>
          <ButtonsOptions cancelar label={'Cancelar'} click={()=> cancelar()}/>
          <ButtonsOptions confirmar label={'Confirmar'}/>
        </div>
      </div>
    </div>
  )

}

export default Urna;
