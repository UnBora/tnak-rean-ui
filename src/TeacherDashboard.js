import { Routes, Route } from "react-router-dom";
import NavbarT from "./components/NavbarT";
import Classwork from "./pages/teacher/ManageClass";
import Course from "./pages/teacher/Course";




import Home from "./pages/teacher/Home";

function TeacherDashboard() {
  return (
    <div>
      <NavbarT />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classwork" element={<Classwork />} />
        <Route path="/course" element={<Course/>} />
      </Routes>
    </div>
  );
}

export default TeacherDashboard;
