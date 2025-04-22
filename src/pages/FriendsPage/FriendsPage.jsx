import FriendsList from "../../components/FriendsList/FriendsList";
import Header from "../../components/Header/Header";
import css from "./FriendsPage.module.css";

export default function FriendsPage() {
  return (
    <div className={css.container}>
      <Header />
      <FriendsList />
    </div>
  );
}
