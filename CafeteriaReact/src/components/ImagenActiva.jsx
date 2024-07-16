import React from 'react'
import '../styles/imagenActiva.css'

function ImagenActiva({ imagen, idImg, setIdImg, isActive, setIsActive }) {
  return (
    <div className={`container-imagen-activa ${isActive ? '' : 'oculto'}`}>
      <img src={imagen} alt='' />
      <div className='container-botones'>
        <button
          type='button'
          className='boton-galeria izquierda'
          onClick={() => {setIdImg(prev => prev - 1 < 1 ? 16 : prev - 1)}}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          type='button'
          className='boton-galeria derecha'
          onClick={() => {setIdImg(prev => prev + 1 > 16 ? 1 : prev + 1)}}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <button
        type='button'
        className='boton-cerrar'
        onClick={() => {setIsActive(false)}}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <p className='container-contador'>{`${idImg}/16`}</p>
    </div>
  )
}

export default ImagenActiva