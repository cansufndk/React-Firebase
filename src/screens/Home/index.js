import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../../components/ProductsCard";
import { productActions } from "../../redux/actions/app";

const Home = () => {
  const state = useSelector((state) => state.product);
  console.log("products", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions());
  }, [dispatch]);

  return <div className="flex flex-wrap justify-center items-center">{state && state.map((card, i) => <ProductsCard key={i} card={card} />)}</div>;
};

export default Home;
