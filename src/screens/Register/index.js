import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUserAction } from "../../redux/actions/app";
import { Formik } from "formik";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const formEmail = useSelector((state) => state.user.email);
  const formPassword = useSelector((state) => state.user.password);

  const initialValues = {
    formEmail,
    formPassword,
  };

  const register = async (formValues) => {
    dispatch(createUserAction(formValues.email, formValues.password));
    navigate("/login");
  };
  console.log("initialValues", initialValues);
  const reducerlarınİçi = useSelector((state) => state);
  console.log("Reducerların içi", reducerlarınİçi);

  return (
    <div className="p-5 ">
      <Formik initialValues={initialValues} onSubmit={register}>
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
              placeholder="******"
              value={values.password}
              onChange={handleChange("password")}
            />
            <div className="mt-3">
              <button className="hover:bg-slate-300 border p-2 w-40 rounded-lg text-sky-900 font-semibold bg-slate-100" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </div>
        )}
      </Formik>
      <div className="mt-3">
        <button className="hover:bg-sky-700 border p-2 w-40 rounded-lg text-slate-100 font-semibold bg-sky-900" onClick={() => navigate("/login")}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
};

export default Register;
