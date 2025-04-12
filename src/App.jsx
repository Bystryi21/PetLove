import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <MobileMenu />
    </>
  );
}

export default App;
