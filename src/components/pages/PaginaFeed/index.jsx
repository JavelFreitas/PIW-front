import React from 'react'
import LinhaDoTempo from '../../commom/LinhaDoTempo'
import NavSuperior from '../../commom/NavSuperior'
import './style.css'

export default function PaginaFeed() {
  return (
    <div className='pagina-feed__div'>
        <NavSuperior/>
        <LinhaDoTempo/>
    </div>
  )
}
