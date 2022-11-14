import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

export default function FormPostar() {
  const navigate = useNavigate();
  const handleSubmeter = () => {
    navigate('/feed')
  }

  return (
    <div className='form-postar__div'>
      <textarea
        name="postarMensagem" 
        id="postarMensagem" 
        cols="40" 
        rows="10"
        value={'Escreva sua mensagem'}
        onChange={() => {}}
        className='message__textarea'
      > 
          
      </textarea>
      <button
          onClick={handleSubmeter}
        >
          Submeter
        </button>
    </div>
  )
}
