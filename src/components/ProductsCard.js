import React from "react";

const ProductsCard = ({ card }) => {
  return (
    <div>
      <div>{card?.title}</div>
      <div>{card?.description}</div>
      <div>{card?.price}</div>
      <button>SEPETE EKLE</button>
    </div>
  );
};

export default ProductsCard;
/*
<img src={card?.image} alt="" /> */
