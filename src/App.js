import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import AboutUs from "./Components/AboutUs";
import P404 from "./Components/P404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<P404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
