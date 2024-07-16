import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/Presentacion.css'


export default function Presentacion() {
  return (
    <>
        
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-md-5 left-side" style={{ backgroundImage: 'url(/imagenes/ImagenPresentacion.jpg)' }}>
          { }
        </div>
        <div className="col-md-7 right-side">
          <div className="text-container">
            <h2>¿Quiénes somos?</h2>
            <p>Espresso Armonía nació de un sueño: crear un lugar acogedor donde cada taza de 
            café cuente una historia y cada visitante se sienta como en casa. Fundada en 2019 
            por María y Juan Pérez, esta cafetería ha crecido desde sus humildes comienzos 
            hasta convertirse en un punto de encuentro para amantes del café, amigos y 
            familias.</p>
          </div>
          <div className="embed-responsive embed-responsive-16by9 video-container">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/4YuLwK4QEVY"
              allowFullScreen
              title="Video de la cafetería"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
