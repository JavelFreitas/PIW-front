import React from 'react'
import Post from '../Post'
import './style.css'

export default function LinhaDoTempo() {
  let infoPosts = [
    {
      id: 1,
      nomeUsuario: "Joao",
      texto: "Menino, tá quente demais hoje",
      qtdLikes: 1
    },
    {
      id: 2,
      nomeUsuario: "Tiago",
      texto: "Num aguento mais essa quintura",
      qtdLikes: 3
    },
  ]

  return (
    <div className='linha-do-tempo__div'>
      {infoPosts.map( post => {
        return (<Post {...post}/>)
        })}      
    </div>
  )
}
