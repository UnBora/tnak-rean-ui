import { Routes, Route } from "react-router-dom";
import Classwork from "./components/teacher/Classwork";
import Course from "./components/teacher/Course";

import NavbarT from "./components/teacher/NavbarT";
import Home from "./pages/teacher/Home";

function App2() {
  return (
    <div>
      <NavbarT />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classwork" element={<Classwork/>} />
        <Route path="/course" element={<Course/>} />
      </Routes>
    </div>
  );
}

export default App2;
