import React from 'react';
import heroBg from '/imagenes/hero_background.png';
import '../styles/header.css';


function Header() {
  return (
  <>
     <section className='container-hero'>
        <div 
          className='container-hero-description h-100 d-flex flex-column
          justify-content-center p-5'
        >
          <h1 className='fuente-principal fw-bold'>Espresso Armonía</h1>
          <h3 className='fw-bold'>Hacé tu día con nuestras especialidades</h3>
          <p className='fw-bold fs-5'>Un buen café = Un estómago feliz</p>
        </div>
      </section>

  </>  
  );
}

export default Header;



