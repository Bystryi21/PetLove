import MobileHeart from "../Svg/MobileHeart";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={css.logo}>
        petl
        <MobileHeart />
        ve
      </div>
    </>
  );
}
