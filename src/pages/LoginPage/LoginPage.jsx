import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <Header />
      <LoginForm />
    </div>
  );
}
