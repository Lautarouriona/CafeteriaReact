import React from 'react';
import Menu from './ContenidosMainContent/Menu';
import Mapa from './ContenidosMainContent/Mapa';
import Presentacion from './ContenidosMainContent/Presentacion';




function MainContent() {
  return (
    <>

      <h1 >Esspresso Armonia</h1>
      <h2>Hacé tu día con nuestras especialidades</h2>
      <Presentacion/>
      <Menu/>
      <Mapa/>
      
    </>
  );
}

export default MainContent;