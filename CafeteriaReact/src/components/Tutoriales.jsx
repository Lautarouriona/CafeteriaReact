import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/tutoriales.css';

const images = [
    { src: '../../imagenes/tut_late.jpg', alt: 'late', link: 'https://www.youtube.com/watch?v=k41PoThZchg',text: 'Son hermosos los "dibujitos" en el cafe, ¿verdad?. Aprende la técnica para sorpender a tus amigos'  },
    { src: '../../imagenes/tut_helado.jpg', alt: 'helado', link: 'https://link2.com', text: 'El cafe no solo se toma caliente, disfruta de un refrescante café helado con hielo y un toque de leche.'  },
    { src: '../../imagenes/tut_macha.jpg', alt: 'macha', link: 'https://link3.com',text: 'Aprende a mezclar polvo de matcha con agua caliente para una bebida energizante.'  },
    { src: '../../imagenes/tut_machiato.jpg', alt: 'machiato', link: 'https://link4.com',text: 'Descubre los pasos para hacer un espresso con un toque de leche espumosa.'  }
];
export default function Tutoriales() {
    return (
    <>
        <Container>
        <h2 className='fuente-principal titulo-galeria'>Aprende estas recetas y tecnicas en tu casa!</h2>
        
          <Row>
                {images.map((image, index) => (
                    <Col key={index} md={6} className="mb-4">
                        <a href={image.link} className="image-link position-relative">
                            <img src={image.src} alt={image.alt} className="img-fluid square-image" />
                            <div className="overlay">
                                <span className="overlay-text">{image.text}</span>
                            </div>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
    );

}
