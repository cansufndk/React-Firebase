import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log("reducer user", user);

  if (user) {
    return (
      <div>
        <h1>Hoşgeldin</h1>
        <h1>{user.email}</h1>
      </div>
    );
  } else {
    console.log("kullanıcı yok");
  }

  return <div>Profile sayfası bu</div>;
};

export default Profile;
