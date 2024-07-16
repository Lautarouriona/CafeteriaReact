import React from 'react';
import iconoCafe from '/public/imagenes/icono-cafe.png';
import iconoCafeFrio from '/public/imagenes/icono-cafeFrio.png';
import iconoJugo from '/public/imagenes/icono-jugo.png';
import "../../styles/menu.css"

function Menu() {
  return (
    <>
      <h2 className="fuente-principal mb-4"> Nuestros menúes </h2>
      <div className="container text-center">
        <div className="row">
          <div className="col" id="item1"><img src={iconoCafe} alt="imagen de cafe"/> 
          <p className="img-text">Café caliente</p></div>

          <div className="col" id="item2"><img src={iconoCafeFrio} alt="imagen de cafe" />
          <p className="img-text">Café frío</p></div>

          <div className="col" id="item3"><img src={iconoJugo} alt="imagen de cafe" />
          <p className="img-text">Jugo frutal</p></div>
        </div>
      </div>
    </>
  );
}

export default Menu;
