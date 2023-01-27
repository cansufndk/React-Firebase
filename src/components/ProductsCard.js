import React from "react";

const ProductsCard = ({ card }) => {
  return (
    <div className="hover:border-sky-800/100 shadow-md transition-all w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2">
      <img className="h-32 object-cover border-b-2 mb-1 pb-3" src={card?.image} alt="" />
      <div className="text-center font-bold h-16">{(card?.title).substring(0, 45)}</div>
      <div className="text-center opacity-70 text-sm">{(card?.description).substring(0, 50)}...</div>
      <div className=" font-bold text-lg">{card?.price} TL</div>
      <button className="w-full rounded-lg text-white bg-sky-900 p-2">SEPETE EKLE</button>
    </div>
  );
};

export default ProductsCard;
/*
 */
