import { useDispatch, useSelector } from "react-redux";
import { selectModalMenu } from "../../redux/modal/selectors";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop";
import { useCallback, useEffect } from "react";
import { closeModalMenu } from "../../redux/modal/slice";
import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";
import Close from "../Svg/Close";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function MobileMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

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

  const closeHandler = () => {
    dispatch(closeModalMenu());
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler();
    }
  };

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    // <ModalBackdrop>
    <div onClick={handleBackdropClick}>
      <div className={css.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={css.close} onClick={closeHandler}>
          <Close />
        </div>
        <div className={css.fisrtContainer}>
          <ul className={css.listMenu}>
            <li className={css.item} onClick={closeHandler}>
              <NavLink to="/news" className={css.link}>
                News
              </NavLink>
            </li>
            <li className={css.item} onClick={closeHandler}>
              <NavLink className={css.link}>Find pet</NavLink>
            </li>
            <li className={css.item} onClick={closeHandler}>
              <NavLink to="/friends" className={css.link}>
                Our friends
              </NavLink>
            </li>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className={css.logOut} onClick={logOutHandler}>
            Log Out
          </div>
        ) : (
          <div className={css.secondContainer}>
            <ul className={css.list}>
              <li onClick={closeHandler}>
                <NavLink to="/login" className={css.login}>
                  Log in
                </NavLink>
              </li>
              <li onClick={closeHandler}>
                <NavLink to="/register" className={css.register}>
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    // </ModalBackdrop>
  );
}
