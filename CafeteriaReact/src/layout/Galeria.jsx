import React, { useEffect, useState } from 'react';
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
    <section>
      <h2>Galería</h2>

      <ul className=''>
        {
          cafes.map(cafe => {
            if (cafe.id < 11) {
              return <ImagenGaleria 
              key={cafe.id}
              cafe={cafe}
            />
            }
          }
          )
        }
      </ul>
    </section>
  )
}
