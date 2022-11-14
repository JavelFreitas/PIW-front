import React, { useCallback, useEffect, useState } from 'react'
import './style.css'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function NavSuperior() {
  let [buttonPressed, setButtonPressed] = useState(1);
  const navigate = useNavigate();

  let buttonClass = useCallback(
    (button) => {
      if(button !== buttonPressed) return '';
      return '--pressed';
    },
    [buttonPressed],
  )

  const handleNavClick = useCallback((path) => {
    let pressed = {
      '/': 1,
      '/feed': 1,
      '/postar': 2
    }[path] || 1;
    
    setButtonPressed(pressed);
    navigate(path);
  }, [navigate, setButtonPressed]);

  useEffect(() => {
    handleNavClick(window.location.pathname);
  }, [handleNavClick])
  
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
