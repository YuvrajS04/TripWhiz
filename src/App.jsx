import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage2 from "./pages/HomePage2";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
