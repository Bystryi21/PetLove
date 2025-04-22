import { useDispatch, useSelector } from "react-redux";
import css from "./FriendsList.module.css";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import { selectFriends } from "../../redux/friends/selectors";

export default function FriendsList() {
  const dispatch = useDispatch();

  const friends = useSelector(selectFriends);
  console.log(friends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Our friends</h2>
      <ul className={css.list}>
        {friends.map((item) => (
          <li key={item._id} className={css.items}>
            <div className={css.work}>Work Time</div>
            <div className={css.wrapper}>
              <div className={css.imgWrapper}>
                <img src={item.imageUrl} alt={item.title} className={css.img} />
              </div>
              <div>
                <h3 className={css.title}>{item.title}</h3>
                <div className={css.infoWrapper}>
                  <p className={css.p}>
                    Email:<span className={css.values}>{item.email}</span>
                  </p>
                  <p className={css.p}>
                    Adress:<span className={css.values}>{item.address}</span>
                  </p>
                  <p className={css.p}>
                    Phone:<span className={css.values}>{item.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
