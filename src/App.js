import "./App.css";
import LandingPage from "./component/screen/LandingPage";
import Content from "./component/screen/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/Content " element={<Content />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
