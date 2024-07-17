import React from 'react';
import about_us_bg from '../img/about_us_background.png';
import '../styles/nosotros.css'

function Nosotros() {
  return (
    <section className='contenedor-nosotros mb-4'>
      <div className='contenedor-img-nosotros d-flex justify-content-center'>
        <img src={about_us_bg} alt='Imagen quiénes somos' />
      </div>
      <div className='contenedor-descripcion-nosotros d-flex flex-column justify-content-center align-items-center'>
        <h2 className='fuente-principal mb-3'>¿Quiénes somos?</h2>
        <p className='descripcion-nosotros mb-4'>
            Espresso Armonía nació de un sueño: crear un lugar acogedor donde
            cada taza de café cuente una historia y cada visitante se sienta como
            en casa. Fundada en 2019 por Jane y John Doe, esta cafetería ha crecido
            desde sus humildes comienzos hasta convertirse en un punto de encuentro 
            para amantes del café, familias y amigos.
        </p>
        <iframe height="315" src="https://www.youtube.com/embed/TT9wIWPlOYs?si=1jjK0KLkHsaAQ1uC" title="YouTube video player"></iframe>
      </div>
    </section>
  )
}

export default Nosotros

{/* <section className='contenedor-nosotros'>
        <div className='row'>
            <div className='col contenedor-img-nosotros d-flex justify-content-center'>
                <img src={about_us_bg} alt='Imagen quiénes somos' />
            </div>
            <div className='col d-flex flex-column justify-content-center'>
                <h2 className='fuente-principal mb-4'>¿Quiénes somos?</h2>
                <p className='descripcion-nosotros mb-4'>
                    Espresso Armonía nació de un sueño: crear un lugar acogedor donde
                    cada taza de café cuente una historia y cada visitante se sienta como
                    en casa. Fundada en 2019 por Jane y John Doe, esta cafetería ha crecido
                    desde sus humildes comienzos hasta convertirse en un punto de encuentro 
                    para amantes del café, familias y amigos.
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TT9wIWPlOYs?si=1jjK0KLkHsaAQ1uC" title="YouTube video player"></iframe>
            </div>
        </div>
    </section> */}