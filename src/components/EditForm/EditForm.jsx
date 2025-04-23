import { Field, Form, Formik } from "formik";
import css from "./EditForm.module.css";

export default function EditForm() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          tel: "",
        }}
      >
        <Form className={css.form}>
          <label>
            <Field
              type="text"
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
          <label>
            <Field
              type="tel"
              name="tel"
              placeholder="Phone Number"
              className={css.input}
            />
          </label>
        </Form>
      </Formik>
    </>
  );
}
