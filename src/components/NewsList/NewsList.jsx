import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/selectors";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operations";
import Search from "../Svg/Search";
import css from "./NewsList.module.css";
import dayjs from "dayjs";

export default function NewsList() {
  const dispatch = useDispatch();

  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const formatDate = (dateString) => {
    return dayjs(dateString).format("DD/MM/YYYY");
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>News</h2>
      <div className={css.inputWrapper}>
        <input type="text" placeholder="Search" className={css.input} />
        <div className={css.svg}>
          <Search />
        </div>
      </div>

      <ul className={css.list}>
        {news.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.title} className={css.img} />
            <p className={css.itemTitle}>{item.title}</p>
            <p className={css.itemText}>{item.text}</p>
            <div className={css.dateAndBtn}>
              <div className={css.date}>{formatDate(item.date)}</div>
              <button type="button" className={css.btn}>
                Read more
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
