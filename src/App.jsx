import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage2 from "./pages/HomePage2";
import ResultsPage from "./pages/ResultsPage";
import {useState} from "react"

function App() {
  const [imageArr, setImageArr] = useState([]);


  function addImage(url, location){
    setImageArr([...imageArr, {url, location}]);
    console.log([imageArr]);

  }

  return (
    <BrowserRouter>
    <Header />
    <div className="layout__wrapper"></div>
    <div className="layout">
    <Routes>
      <Route path="/" element={<HomePage  addImage={addImage} />} />
      <Route path="/results" element={<ResultsPage imageArr={imageArr} />} />
    </Routes>
    </div>
    <div />
    <Footer />
  </BrowserRouter>
  );
}

export default App;
