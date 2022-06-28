import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Register from "./components/Register";
import ManageClass from "./pages/teacher/ManageClass";
import FormSubmit from "./pages/student/FormSubmit";
import ViewWorkForSub from "./pages/student/ViewWorkForSub";
import DeactivateAccount from "./components/SettingAcc/DeactivateAccount";
import DeleteAccount from "./components/SettingAcc/DeleteAccount";
import ChangePassword from "./components/SettingAcc/ChangePassword";
import Account from "./components/SettingAcc/Account";
import Classwork from "./pages/student/Classwork";
import Course from "./pages/student/Course"
import ViewFiles from "./pages/student/ViewFiles";
import Login from "./pages/Login";
import AccountSetting from "./pages/AccountSetting";
import Navbar from "./components/Navbar";
import AllStudent from "./pages/teacher/AllStudent";
import Home from "./pages/teacher/Home"
import ResultList from "./pages/teacher/ResultList";
import StudentRequest from "./pages/teacher/StudentRequest";
import ManageClasswork from "./pages/teacher/ManageClasswork";
import ManageCourse from "./pages/teacher/ManageCourse";
import AllClasswork from "./pages/teacher/AllClasswork";
import AllCourse from "./pages/teacher/AllCourse";
import StuIndex from "./pages/student/StuIndex";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/index" element={<Home />} />
        <Route path="/all-classwork" element={<AllClasswork />} />
        <Route path="/all-course" element={<AllCourse />} />
        <Route path="/classroom" element={<ManageClass />}>
          <Route path="students" element={<AllStudent />}></Route>
          <Route path="requests" element={<StudentRequest />}></Route>
          <Route path="classworks" element={<ManageClasswork />}></Route>
          <Route path="courses" element={<ManageCourse />}></Route>
          <Route path="results" element={<ResultList />}></Route>
        </Route>

        <Route path="/setting" element={<AccountSetting />}>
          <Route path="account" element={<Account />}></Route>
          <Route path="change-password" element={<ChangePassword />}></Route>
          <Route
            path="deactivate-account"
            element={<DeactivateAccount />}
          ></Route>
          <Route path="delete-account" element={<DeleteAccount />}></Route>
        </Route>
        <Route path="/stu-index" element={<StuIndex />} />
        <Route path="/formsubmit" element={<FormSubmit />} />
        <Route path="/work-submit" element={<ViewWorkForSub />} />
        <Route path="/stu-classwork" element={<Classwork />} />
        <Route path="/stu-course" element={<Course />} />
        <Route path="/files" element={<ViewFiles />} />
      </Routes>
    </div>
  );
}

export default App;
