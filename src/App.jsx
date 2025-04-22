import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import NewsPage from "./pages/NewsPage/NewsPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import RestrictedRoute from "./RestrictedRoute";
import PrivatRoute from "./PrivatRoute";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route
          path="profile"
          element={<PrivatRoute component={<ProfilePage />} />}
        />
      </Routes>
      <MobileMenu />
    </>
  );
}

export default App;
