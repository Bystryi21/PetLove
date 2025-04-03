import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import css from "./RegisterForm.module.css";
import CloseEye from "../Svg/CloseEye";
import Eye from "../Svg/Eye";
import { NavLink } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import {
  selectConfirmPassword,
  selectPasswordIsOpen,
} from "../../redux/auth/selectors";
import { toggleConfirmPassword, togglePassword } from "../../redux/auth/slice";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const isOpenPassword = useSelector(selectPasswordIsOpen);
  const isOpenConfirmPassword = useSelector(selectConfirmPassword);

  const handleSubmit = (values, actions) => {
    const { confirmPassword, ...filteredValues } = values;

    dispatch(register(filteredValues));

    actions.resetForm({
      values: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  };

  const passwordIsOpen = () => {
    dispatch(togglePassword());
  };

  const passwordConfirmIsOpen = () => {
    dispatch(toggleConfirmPassword());
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.imgContainer}>
          <img
            src="
        /imageReg-min.png"
            alt="dog"
          />
        </div>
        <div className={css.secondBlock}>
          <div className={css.contentWrapper}>
            <h2 className={css.title}>Registration</h2>
            <p className={css.text}>
              Thank you for your interest in our platform.
            </p>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form className={css.form}>
                <label>
                  <Field
                    type="name"
                    name="name"
                    placeholder="Name"
                    className={css.input}
                  />
                </label>
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
                    type={isOpenPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={css.input}
                    onClick={passwordIsOpen}
                  />
                  <div className={css.svgWrapper}>
                    {isOpenPassword ? (
                      <div className={css.eye}>
                        <Eye />
                      </div>
                    ) : (
                      <div className={css.eye}>
                        <CloseEye />
                      </div>
                    )}
                  </div>
                </label>
                <label className={css.label}>
                  <Field
                    type={isOpenConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={css.input}
                    onClick={passwordConfirmIsOpen}
                  />
                  <div className={css.svgWrapper}>
                    {isOpenConfirmPassword ? (
                      <div className={css.eye}>
                        <Eye />
                      </div>
                    ) : (
                      <div className={css.eye}>
                        <CloseEye />
                      </div>
                    )}
                  </div>
                </label>

                <button type="" className={css.btn}>
                  Registration
                </button>
              </Form>
            </Formik>
            <div className={css.registerText}>
              Already have an account?
              <NavLink to="/login" className={css.wordRegister}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
