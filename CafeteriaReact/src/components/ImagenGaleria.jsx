import React from 'react'

export default function ImagenGaleria({ cafe }) {
  return (
    <li>
        <p>{cafe.title}</p>
        <img src={cafe.image} alt={`Imagen de ${cafe.title}`} />
    </li>
  )
}
