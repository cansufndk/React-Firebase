import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ContainerPage from "./containers/ContainerPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    //*Kullanıcı oluşturmak için
    const user = await createUser(email, password);
    console.log("register", user);
  };

  const login = async () => {
    //*Kullanıcı girişi için
    const user = await loginUser(email, password);
    console.log("login", user);
  };*/

  return (
    <div className="App">
      <ContainerPage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Detail />} />
            <Route path="*" element={<Profile />} />
            <Route path="*" element={<Login />} />
            <Route path="*" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContainerPage>
    </div>
  );
}

export default App;

/*
<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e mail" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />

      <button onClick={login}>login</button>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e mail" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />

      <button onClick={register}>Register</button>
       */
