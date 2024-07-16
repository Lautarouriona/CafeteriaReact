import React from 'react';
import '../styles/menuItem.css'

function MenuItem(props) {
  return (
    <div className='contenedor-item'>

      <div className='contenedor-img-cantidad'>

        <div className='contenedor-img mb-2'>
          <h3>{props.title}</h3>
          <img className='imagen-item' src={props.img} alt={props.alt} />
        </div>

        <div className='contenedor-cantidad-precio'>
          <p className='mb-2'>${props.price}</p>
          <form action="">
            <input className='mb-2' type='number' min={1} placeholder='Cantidad' />
            <button type='button' id={props.id} onClick={props.click}>+</button>
          </form>
        </div>

      </div>


      <div className='contenedor-info'>
        
        <p>{props.description}</p>
      </div>

    </div>
  )
}

export default MenuItem