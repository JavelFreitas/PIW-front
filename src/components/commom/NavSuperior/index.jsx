import React, { useCallback, useState } from 'react'
import './style.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleNavClick = useCallback((path) => {
    let pressed = {
      '/': 1,
      '/feed': 1,
      '/postar': 2
    }[path] || 1;
    
    setButtonPressed(pressed);
    navigate(path);
  }, [navigate]);
  
  return (
    <div className={`nav-superior__div`}>
        <div
          onClick={() => handleNavClick('/')}
          >PIW Project
        </div>

        <div className='nav-superior__action-holder'>
          <button 
            to={'/feed'}
            value={true} 
            className={`nav-superior__button${buttonClass(1)}`}
            onClick={() => handleNavClick('/feed')}
          >
              Linha do Tempo
          </button>
          <button 
            className={`nav-superior__button${buttonClass(2)}`}
            onClick={() => handleNavClick('/postar')}  
          >
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
