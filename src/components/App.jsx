import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Teams from "./Teams";
import Players from "./Players";
import TeamPage from "./TeamPage";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamid" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
