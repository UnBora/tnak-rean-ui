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
import IndexV2 from "./pages/IndexV2";
import FormSubmit from "./pages/student/FormSubmit";
import ViewWorkForSub from "./pages/student/ViewWorkForSub";
import DeactivateAccount from "./components/SettingAcc/DeactivateAccount";
import DeleteAccount from "./components/SettingAcc/DeleteAccount";
import ChangePassword from "./components/SettingAcc/ChangePassword";
import Account from "./components/SettingAcc/Account";
import Index from "./pages/Index";
import Classwork from "./pages/student/Classwork";
import Course from "./pages/student/Course";
import ViewFiles from "./pages/student/ViewFiles";

function App() {
  return (
    <div>
      <NavbarT />
      <Routes>
        <Route path="/" element={<StudentRequest/>} />
        <Route path="/login" element={<IndexV2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/classwork" element={<Classwork />} />
        <Route path="/course" element={<Course />} />
        <Route path="/setting" element={<AccountSetting />}>
          <Route path="account" element={<Account/>}></Route>
          <Route path="change-password" element={<ChangePassword />}></Route>
          <Route
            path="deactivate-account"
            element={<DeactivateAccount />}
          ></Route>
          <Route path="delete-account" element={<DeleteAccount />}></Route>
        </Route>
        <Route path="/index" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/formsubmit" element={<FormSubmit />} />
        <Route path="/work-submit" element={<ViewWorkForSub/>}/>
        <Route path="/stu-classwork" element={<Classwork/>}/>
        <Route path="/stu-course" element={<Course/>}/>
        <Route path="/files" element={<ViewFiles/>}/>
      </Routes>
    </div>
  );
}

export default App;
