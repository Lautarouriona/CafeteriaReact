import React from 'react';
import cappuccino_img from '../img/cappuccino.jpg';
import '../styles/menuItem.css'

function MenuItem() {
  return (
    <li className='contenedor-item'>
        <div className='contenedor-img-cantidad'>
          <div className='contenedor-img mb-2'>
            <img className='imagen-item' src={cappuccino_img} alt='cappuccino imagen' />
          </div>
          <div className='contenedor-cantidad-precio'>
            <p className='mb-2'>$2000.00</p>
            <input className='mb-2' type='number' min={1} placeholder='Ingrese cantidad' />
            <button type='button'>Agregar a carrito</button>
          </div>
        </div>
        <div className='contenedor-info'>
          <h3>Cappuccino</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat corrupti doloribus ipsam ipsa vitae explicabo amet saepe, nihil assumenda voluptatibus? Distinctio voluptate sint dolor eius ex enim iure fugiat odio.</p>
        </div>
    </li>
  )
}

export default MenuItem