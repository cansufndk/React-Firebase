import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ContainerPage from "./containers/ContainerPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  //const { user } = useSelector((state) => state.user);
  const drawer = useSelector((state) => state.drawer);

  return (
    <div className="App">
      <ContainerPage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Detail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </BrowserRouter>
      </ContainerPage>
    </div>
  );
}

export default App;
