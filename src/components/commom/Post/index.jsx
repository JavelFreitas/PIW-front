import React from 'react'
import './style.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function Post(props) {
  let mockComments = [
    {author: 'Joao', comment: 'Hello'},
    {author: 'Joao', comment: 'Concordo'}
  ]
  return (
    <div className='post__div'>
        <div className='nome-usuario__div'>{props.nomeUsuario}</div>
        <div>{props.texto}</div>
        <div className='curtidas__div'>
          Curtidas: {props.qtdLikes}
          { props.id === 1
            ? <ThumbUpIcon/>
            : <ThumbUpOffAltIcon/>
          }
        </div>
        <div
          className='comments__div'
        >
            {mockComments.map(comment => {
              return (
                <div
                  className='thread__div'
                  key={comment.author + props.nomeUsuario}
                >
                  {comment.author}
                  <div className='thread-comment__div'>
                    {comment.comment}
                  </div>
                </div>
              )
            })}
        </div>
        <div
          className='add-comments__div'
        >
          
          <input 
            type="text" 
            placeholder='Escreva sua mensagem' 
            className='comments__input'
            />
           
        </div>
    </div>
  )
}

Post.defaultProps = {
  nomeUsuario: null,
  texto: null,
  qtdLikes: null
}