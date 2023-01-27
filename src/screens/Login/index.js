import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async () => {
    const user = dispatch(loginUserAction(email, password));
    console.log("login", user);
    if (user) {
      navigate("/profile");
    } else {
      console.log("giriş olmadı");
    }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
};

export default Login;
