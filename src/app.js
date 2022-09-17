import "./App.css";
import "./Mobile.css";
import "./css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Head.js";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Coffee";
  return (
    <div className="App">
      <div className="container-xxl">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
