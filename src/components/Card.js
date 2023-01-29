import React from "react";
import { useDispatch } from "react-redux";
import { CgCloseO } from "react-icons/cg";
import { cardActions } from "../redux/actions";

const Card = () => {
  const dispatch = useDispatch();

  const closeDrawer = (drawer) => {
    dispatch(cardActions(false));
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl ">SEPETİM:</h1>
        <div onClick={closeDrawer}>
          <CgCloseO size={23} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card;
