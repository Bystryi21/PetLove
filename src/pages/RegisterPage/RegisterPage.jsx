import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={css.container}>
      <Header />
      <RegisterForm />
    </div>
  );
}
