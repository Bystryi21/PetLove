import { NavLink, useLocation } from "react-router-dom";
import MobileHeart from "../Svg/MobileHeart";
import css from "./Logo.module.css";

export default function Logo() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const mobileHeart = isHome ? "white" : "#F6B83D";
  return (
    <>
      <NavLink
        to="/"
        className={`css.logo ${isHome ? css.logoWhite : css.logoBlack}`}
      >
        petl
        <MobileHeart fill={mobileHeart} />
        ve
      </NavLink>
    </>
  );
}
