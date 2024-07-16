import React from 'react'
import '../styles/imagenGaleria.css'

export default function ImagenGaleria({ cafe }) {
  return (
    <li className='container-imagen-galeria'>
        <div className='container-titulo-imagen'>
          <p className='titulo-imagen'>{cafe.title}</p>
        </div>
        <img src={cafe.image} alt={`Imagen de ${cafe.title}`} />
    </li>
  )
}
