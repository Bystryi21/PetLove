import Header from "../../components/Header/Header";
import UserInfo from "../../components/UserInfo/UserInfo";
import css from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <div className={css.container}>
      <Header />
      <UserInfo />
    </div>
  );
}
