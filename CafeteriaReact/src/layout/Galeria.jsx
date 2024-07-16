import React, { useEffect, useState } from 'react';
import '../styles/galeria.css';
import ImagenGaleria from '../components/ImagenGaleria';

const imgs_url = 'https://api.sampleapis.com/coffee/hot';

/* async function getCafes() {
  const res = await fetch(imgs_url);
  const data = await res.json();
  return data;
} */

export default function Galeria() {
  const [cafes, setCafes] = useState([]);

  const fetchData = async () => {
    const res = await fetch(imgs_url);
    const data = await res.json();
    setCafes(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='container'>
      <h2 className='fuente-principal'>Galería</h2>

      <ul className='container-imagenes-galeria'>
        {
          cafes.map(cafe => {
            if (cafe.id < 17) {
              return <ImagenGaleria 
              key={cafe.id}
              cafe={cafe}
            />
            }
          })
        }
      </ul>
    </section>
  )
}
