import React from 'react'
import './style.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function Post(props) {
  return (
    <div className='post__div'>
        <div className='nome-usuario__div'>{props.nomeUsuario}</div>
        <div>{props.texto}</div>
        <div className='curtidas__div'>
          Curtidas: {props.qtdLikes}
          <ThumbUpIcon/>
        </div>
    </div>
  )
}

Post.defaultProps = {
  nomeUsuario: null,
  texto: null,
  qtdLikes: null
}