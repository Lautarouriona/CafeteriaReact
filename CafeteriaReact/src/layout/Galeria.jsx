import React, { useEffect } from 'react';
import ImagenGaleria from '../components/ImagenGaleria';

const imgs_url = 'https://api.sampleapis.com/coffee/hot';

async function getCafes() {
  const res = await fetch(imgs_url);
  const data = await res.json();
  return data;
}

export default async function Galeria() {
  return (
    <section>
      <h2>Galería</h2>

      <ul className=''>
        {
          cafes.map(cafe => 
            <ImagenGaleria 
              key={cafe.id}
              cafe={cafe}
            />
          )
        }
      </ul>
    </section>
  )
}
