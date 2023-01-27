import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserAction, userStatus } from "../../redux/actions/app";
import { createUserFirebase } from "../../firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async () => {
    const user = dispatch(createUserAction(email, password));
    console.log("register", user);
    if (user) {
      navigate("/login");
    } else {
      console.log("user yok");
    }
  };

  return (
    <div>
      <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
