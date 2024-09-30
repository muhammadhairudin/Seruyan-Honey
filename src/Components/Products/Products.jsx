import React from 'react';
import HoneyCard from '../Card-Honey/HoneyCard';

function Products() {
  // data produk
  const honeyData = [
    {
      id: '1',
      name: 'Madu Akasia Carva',
      description: 'Madu dari bunga akasia, cair, lembut, kaya antioksidan. Cocok untuk kesehatan harian meningkatan daya tahan tubuh.',
      packaging: 'Botol Kaca 450ml',
      price: 'Rp120.000',
      imageUrl: '/public/Images/akasiacarva.jpeg',
    },
    {
      id: '2',
      name: 'Madu Kayu Putih',
      description: 'Madu kayu putih dengan sifat antibakteri dan antiradang. Membantu meredakan flu dan meningkatkan daya tahan tubuh.',
      packaging: 'Botol Kaca 450ml',
      price: 'Rp140.000',
      imageUrl: '/public/Images/maduKayuPutih.jpeg',
    },
    {
      id: '3',
      name: 'Madu Bunga Randu',
      description: 'Madu bunga randu, kental dan aroma khas bunga randu. Cocok untuk kesehatan harian dan meningkatkan daya tahan tubuh.',
      packaging: 'Botol Kaca 450ml',
      price: 'Rp140.000',
      imageUrl: '/public/Images/maduRandu.jpeg',
    },
    // semoga bisa ditambah nantinya
  ];
  
  return (
    <div className="p-10">
      <h1 className="mb-4 text-2xl font-bold text-center">Produk Madu</h1>
      <div className="flex justify-around">
        {honeyData.map((honey) => (
          <HoneyCard 
            key={honey.id} 
            honey={honey} 
          />
        ))}
      </div>
    </div>
  );
}

export default Products;