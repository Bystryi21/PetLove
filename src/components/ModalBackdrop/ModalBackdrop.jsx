import css from "./ModalBackdrop.module.css";

export default function ModalBackdrop({ onClick, children }) {
  return (
    <>
      <div className={css.modalbackdrop} onClick={onClick}>
        {children}
      </div>
    </>
  );
}
