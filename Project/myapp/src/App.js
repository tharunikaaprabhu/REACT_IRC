import Home from "./Components/Home";
import Nav from "./Components/Navbar";
import Login from "./Components/Log";
import Sign_up from "./Components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Log" element={<Login />} />
          <Route path="/Register" element={<Sign_up />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
