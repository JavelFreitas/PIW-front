import React, { useEffect } from 'react'
import FormPostar from '../../commom/FormPostar'
import './style.css'
export default function PaginaPostar() {

  useEffect(() => {
    document.title = 'PIW | Postar'
  }, [])
  return (
    <div className='pagina-postar__div'>
      <h1>Postar</h1>
      <FormPostar />
    </div> 
  )
}
