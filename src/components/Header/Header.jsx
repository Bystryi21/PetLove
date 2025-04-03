import Logo from "../Logo/Logo";
import Burger from "../Svg/Burger";
import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.container}>
      <Logo />
      <div className={css.burger}>
        <Burger />
      </div>
    </div>
  );
}
