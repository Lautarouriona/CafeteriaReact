import React from 'react';
import logo from '../img/coffee_logo.png'
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className='container-navbar px-5 py-2'>
      <a href='#' className='enlace-logo'>
        <img className='imagen-logo' src={logo} alt='Logo Espresso Armonía' />
        <h3 className='fuente-principal'>Espresso Armonía</h3>
      </a>

      <div className='container-nav-links'>
        <a className='link-navbar' href='#'>Nosotros</a>
        <a className='link-navbar' href='#'>Menúes</a>
        <a className='link-navbar' href='#'>Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar