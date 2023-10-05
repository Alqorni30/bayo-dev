import "./App.css";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projectspage";
import Aboutpage from "./pages/Aboutpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/about" Component={Aboutpage}></Route>
      </Routes>
    </Router>
  )
}

export default App;
