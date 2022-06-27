import { Routes, Route } from "react-router-dom";
import IndexV2 from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Register from "./components/Register";
import Classwork from "./pages/teacher/ManageClass";
import Course from "./pages/teacher/Course";
import Home from "./pages/teacher/Home";
import NavbarT from "./components/NavbarT";
import AllStudent from "./pages/teacher/AllStudent";
import StudentRequest from "./pages/teacher/StudentRequest";

function App() {
  return (
    <div>
      <NavbarT />
      <Routes>
        <Route path="/" element={<StudentRequest/>} />
        <Route path="/login" element={<IndexV2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/index" element={<Home />} />
        <Route path="/classwork" element={<Classwork />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
}

export default App;
