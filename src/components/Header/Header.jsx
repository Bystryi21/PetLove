import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Burger from "../Svg/Burger";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  const isHeader = location.pathname === "/";

  const burgerColor = isHeader ? "white" : "#262626";

  return (
    <div className={css.container}>
      <Logo />
      <div className={css.burger}>
        <Burger stroke={burgerColor} />
      </div>
    </div>
  );
}
