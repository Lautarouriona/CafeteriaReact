import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className='container-fluid text-center navbar-bg px-5 py-3 shadow'>
      <nav className='row'>
        <a href='#' className='col-3 d-flex'>
          <i className="bi bi-cup-hot"></i>
          <h3 className='fuente-principal fs-5'>Espressso Armonía</h3>
        </a>

        <div className='col d-flex align-items-center fw-bold justify-content-end'>
          <a className='link-navbar' href='#'>Nosotros</a>
          <a className='link-navbar' href='#'>Menúes</a>
          <a className='link-navbar' href='#'>Contacto</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar