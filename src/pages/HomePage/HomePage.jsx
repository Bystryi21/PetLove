import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.wrapperTwoBlock}>
        <div>
          <Header />
        </div>
        <div>
          <p className={css.title}>
            Take good <span className={css.span}>care</span> of your small pets
          </p>
          <p className={css.text}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>
      <div>
        <img src="image 47.png" alt="women with dog" className={css.img} />
      </div>
    </div>
  );
}
