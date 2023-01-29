import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserFirebase } from "../../redux/actions";

const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log("reducer user", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    dispatch(logoutUserFirebase());
    navigate("/register");

    /*if (user) {
      dispatch(logoutUserFirebase());
      navigate("/register");
      console.log("kulanıcı çıkış yaptı");
    } else {
      console.log("çıkış başarısız oldu");
    }**/
  };

  useEffect(() => {}, [user]);

  return (
    <div className="border">
      <h1 className="font-semibold">Profile</h1>

      <div className="border rounded-lg p-2 text-sky-900 my-3">{user && user ? <div> {user.email}</div> : undefined}</div>

      <button className="hover:bg-slate-300 border p-2 w-40 rounded-lg text-sky-900 font-semibold bg-slate-100" onClick={logout}>
        Çıkış Yap
      </button>
    </div>
  );
};

export default Profile;
