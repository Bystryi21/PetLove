import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Burger from "../Svg/Burger";
import css from "./Header.module.css";
import User from "../Svg/User";
import { openModalMenu } from "../../redux/modal/slice";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const location = useLocation();

  const isHeader = location.pathname === "/";

  const burgerColor = isHeader ? "white" : "#262626";

  const openHandler = () => {
    dispatch(openModalMenu());
  };

  return (
    <div className={css.container}>
      <Logo />
      <div className={css.burger}>
        <div
          className={`css.userWrapper ${
            isHeader ? css.userWhite : css.userYellow
          }`}
        >
          <NavLink to="/profile">
            <User />
          </NavLink>
        </div>
        <div onClick={openHandler}>
          <Burger stroke={burgerColor} />
        </div>
      </div>
    </div>
  );
}
