import React, { useCallback, useState } from 'react'
import './style.css';

export default function NavSuperior() {
  let [buttonPressed, setButtonPressed] = useState(1);

  let buttonClass = useCallback(
    (button) => {
      console.log(button, buttonPressed);
      if(button !== buttonPressed) return '';
      return '--pressed';
    },
    [buttonPressed],
  )
  
  return (
    <div className={`nav-superior__div`}>
        <div>PIW Project</div>

        <div className='nav-superior__action-holder'>
          <button value={true} className={`nav-superior__button${buttonClass(1)}`}>
              Linha do Tempo
          </button>
          <button className={`nav-superior__button${buttonClass(2)}`}>
              Postar
          </button>

          <div className='logged-user__div'>
            Pessoa Logada
          </div>
        </div>
    </div>
  )
}
