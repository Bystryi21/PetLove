import css from "./MyPetsList.module.css";
import Delete from "../Svg/Delete";

export default function MyPetsList() {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <img src="mydog.png" alt="dog" className={css.img} />
          <div className={css.wrapper}>
            <div>
              <h3 className={css.title}>Golden Retriever Puppies</h3>
            </div>
            <ul className={css.detailsInfoList}>
              <li className={css.detailsItem}>
                <p className={css.detailsTitle}>Name</p>
                <p className={css.span}>Daisy</p>
              </li>
              <li className={css.detailsItem}>
                <p className={css.detailsTitle}>Birthday</p>
                <p className={css.span}>01.10.2022</p>
              </li>
              <li className={css.detailsItem}>
                <p className={css.detailsTitle}>Sex</p>
                <p className={css.span}>Female</p>
              </li>
              <li className={css.detailsItem}>
                <p className={css.detailsTitle}>Species</p>
                <p className={css.span}>Dog</p>
              </li>
            </ul>
          </div>
          <div>
            <div className={css.delete}>
              <Delete />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
