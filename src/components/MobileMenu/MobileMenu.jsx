import { useDispatch, useSelector } from "react-redux";
import { selectModalMenu } from "../../redux/modal/selectors";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { useCallback, useEffect } from "react";
import { closeModalMenu } from "../../redux/modal/slice";
import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";

export default function MobileMenu() {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectModalMenu);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        dispatch(closeModalMenu());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <div className={css.wrapper}>
        <ul className={css.listMenu}>
          <li>
            <NavLink>News</NavLink>
          </li>
          <li>
            <NavLink>Find pet</NavLink>
          </li>
          <li>
            <NavLink>Our friends</NavLink>
          </li>
        </ul>
        <ul className={css.list}>
          <li>
            <NavLink to="/login" className={css.login}>
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={css.register}>
              Registration
            </NavLink>
          </li>
        </ul>
      </div>
    </ModalBackdrop>
  );
}
