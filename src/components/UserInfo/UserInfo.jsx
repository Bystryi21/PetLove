import css from "./UserInfo.module.css";
import UserProfile from "../Svg/UserProfile";
import Edit from "../Svg/Edit";
import UserUpload from "../Svg/UserUpload";
import Plus from "../Svg/Plus";
import EditForm from "../EditForm/EditForm";
import MyPetsList from "../MyPetsList/MyPetsList";

export default function UserInfo() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.wrapperUser}>
          <div className={css.profile}>
            User
            <UserProfile />
          </div>
          <div className={css.editWrapper}>
            <Edit />
          </div>
        </div>
        <div className={css.uploadWrapper}>
          <div className={css.uploadPhoto}>
            <UserUpload />
          </div>
          <div className={css.uploadText}>Upload photos</div>
        </div>
        <div>
          <h2 className={css.titleInfo}>My information</h2>
          <EditForm />
        </div>
        <div className={css.myPetsTitleWrapper}>
          <div>
            <h3 className={css.petsTitle}>My pets</h3>
          </div>
          <div>
            <div className={css.addPetWrapper}>
              Add pet
              <Plus />
            </div>
          </div>
        </div>
        <MyPetsList />
        <button className={css.logOut}>Log out</button>
      </div>
    </div>
  );
}
