// import React from 'react';
// import ButtonBuy from '../Button/ButtonBuy';

// function HoneyCard({ honey }) {
//   return (
//     <div className="p-4 border rounded-lg shadow-lg w-96">
//       <img 
//         src={honey.imageUrl} 
//         alt={honey.name} 
//         className="object-cover w-full h-32 rounded-lg" 
//       />
//       <h2 className="mt-2 text-xl font-bold">{honey.name}</h2>
//       <p className="mt-1 text-gray-600">{honey.description}</p>
//       <p className="mt-1 text-gray-600">Kemasan: {honey.packaging}</p>
//       <p className="mt-1 text-gray-600">Harga: {honey.price}</p>
//       <ButtonBuy 
//         onClick={() => window.open(`https://wa.me/085249209213?text=Assalamualaikum, Masih Readykah Madunya ${honey.name}?`, '_blank')} 
//       />
//     </div>
//   );
// }

// export default HoneyCard;


import React from 'react';
import ButtonBuy from '../Button/ButtonBuy'; // Ensure this component is properly implemented

function HoneyCard({ honey }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg w-80">
      {/* Display the product image */}
      <img 
        src={honey.imageUrl} 
        alt={honey.name} 
        className="object-cover w-full mb-3 rounded-md h-96" 
      />
      
      {/* Display the product name */}
      <h2 className="mb-1 text-xl font-semibold">{honey.name}</h2>
      
      {/* Display the product description */}
      <p className="mb-2 text-gray-700">{honey.description}</p>
      
      {/* Display packaging type */}
      <p className="mb-1 text-gray-600"><strong>Kemasan:</strong> {honey.packaging}</p>
      
      {/* Display the price */}
      <p className="mb-4 text-gray-600"><strong>Harga:</strong> {honey.price}</p>
      
      {/* Buy button */}
      <ButtonBuy 
        onClick={() => 
          window.open(
            `https://wa.me/085249209213?text=Assalamualaikum, Masih Readykah Madunya ${honey.name}?`, 
            '_blank'
          )
        } 
        label="Beli Sekarang"
      />
    </div>
  );
}

export default HoneyCard;
