import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import AboutUs from "./Components/AboutUs";
import P404 from "./Components/P404";
import Footer from "./Components/Footer";
import Docs from "./Components/Docs";
import AdminPanel from "./Components/AdminPanel";
import NewsPage from "./Components/NewsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/documentations" element={<Docs />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/news/:id" element={<NewsPage />} />

          <Route path="*" element={<P404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
