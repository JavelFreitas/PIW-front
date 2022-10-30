import React, { useCallback, useState } from 'react'
import './style.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

export default function NavSuperior() {
  let [buttonPressed, ] = useState(1);

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
            Usuário Logado
            <Avatar sx={{ bgcolor: deepPurple[500] }}>UL</Avatar>
          </div>
        </div>
    </div>
  )
}
