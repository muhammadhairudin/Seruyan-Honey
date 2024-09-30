// src/Components/card-honey/ButtonBuy.js
import React from 'react';

function ButtonBuy({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
    >
      Beli Sekarang
    </button>
  );
}

export default ButtonBuy;
