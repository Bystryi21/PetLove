import { Field, Form, Formik } from "formik";
import CloseEye from "../Svg/CloseEye";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img
          src="
        /image-min.png"
          alt="dog"
        />
      </div>
      <div className={css.secondBlock}>
        <div className={css.contentWrapper}>
          <h2 className={css.title}>Log in</h2>
          <p className={css.text}>
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={css.input}
                />
              </label>
              <label className={css.label}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={css.input}
                />
                <div className={css.svgWrapper}>
                  <CloseEye />
                </div>
              </label>

              <button type="" className={css.btn}>
                Log In
              </button>
            </Form>
          </Formik>
          <div className={css.registerText}>
            Don’t have an account?
            <NavLink to="/register" className={css.wordRegister}>
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
