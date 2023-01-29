import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formEmail = useSelector((state) => state.user.email);
  const formPassword = useSelector((state) => state.user.password);

  const initialValues = {
    formEmail,
    formPassword,
  };

  const login = async (formValues) => {
    dispatch(loginUserAction(formValues.email, formValues.password));
    navigate("/profile");
  };

  console.log("initialValues", initialValues);
  const reducerlarınİçi = useSelector((state) => state);
  console.log("Reducerların içi", reducerlarınİçi);
  return (
    <div className="p-5">
      <Formik initialValues={initialValues} onSubmit={login}>
        {({ values, handleChange, handleSubmit }) => (
          <div className="flex flex-col">
            <input
              className="w-80 border outline-none p-2 my-3 rounded-lg"
              placeholder="Email@gmail.com"
              value={values.email}
              onChange={handleChange("email")}
            />
            <input
              className="w-80 border outline-none p-2 rounded-lg"
              type="password"
              placeholder="*******"
              value={values.password}
              onChange={handleChange("password")}
            />
            <div className="mt-3">
              <button className="hover:bg-slate-300 border p-2 w-40 rounded-lg text-sky-900 font-semibold bg-slate-100" onClick={handleSubmit}>
                Giriş Yap
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
