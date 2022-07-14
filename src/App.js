import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ManageClass from "./pages/teacher/ManageClass";
import FormSubmit from "./pages/student/FormSubmit";
import ViewWorkForSub from "./pages/student/ViewWorkForSub";
import DeactivateAccount from "./components/settingacc/DeactivateAccount";
import DeleteAccount from "./components/settingacc/DeleteAccount";
import ChangePassword from "./components/settingacc/ChangePassword";
import Account from "./components/settingacc/Account";
import Classwork from "./pages/student/Classwork";
import Course from "./pages/student/Course";
import ViewFiles from "./pages/student/ViewFiles";
import AccountSetting from "./pages/AccountSetting";
import AllStudent from "./pages/teacher/AllStudent";
import Home from "./pages/teacher/Home";
import ResultList from "./pages/teacher/ResultList";
import StudentRequest from "./pages/teacher/StudentRequest";
import ManageClasswork from "./pages/teacher/ManageClasswork";
import ManageCourse from "./pages/teacher/ManageCourse";
import AllClasswork from "./pages/teacher/AllClasswork";
import AllCourse from "./pages/teacher/AllCourse";
import StuIndex from "./pages/student/StuIndex";
import ViewFilesT from "./pages/teacher/ViewFilesT";
import OneSignal from "react-onesignal";
import { useEffect, useState } from "react";
import Login from "./pages/authentication/Login";
import { getCurrentUser } from "./service/authService";
import ListGradeStudent from "./pages/teacher/ListGradeStudent";
import FolderItems from "./pages/teacher/FolderItems";
import FolderCourse from "./pages/teacher/FolderCourse";
import GradeStudentWork from "./pages/teacher/GradeStudentWork";

function App() {
  const user = getCurrentUser;
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.init({
      appId: "1557ea45-8f4a-473d-ad64-dff9355214ec",
      setInitialized: true,
      allowLocalhostAsSecureOrigin: true,
    });
    OneSignal.showSlidedownPrompt();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/grade" element={<GradeStudentWork/>}></Route>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/about" element={<AboutUs />} />
        {/* On navbar page */}
        <Route path="/teacher" element={<Home />} />
        <Route path="/all-classwork" element={<AllClasswork />}/>
        <Route path="/all-classwork/:folderId" element={<FolderItems/>} />
        <Route path="/all-course" element={<AllCourse />} />
        <Route path="/all-course/:folderCourseId" element={<FolderCourse />} />
        {/* Per class */}
        <Route path="/classroom/:id" element={<ManageClass />}>
          <Route path="students" element={<AllStudent />}></Route>
          <Route path="requests" element={<StudentRequest />}></Route>
          <Route path="classworks" element={<ManageClasswork />}>
          </Route>
          <Route
            path="classworks/:materialId/list"
            element={<ListGradeStudent />}
          >
          </Route>
          {/* <Route path="grade" element={<GradeStudentWork />}></Route> */}
          <Route path="courses" element={<ManageCourse />}></Route>
          <Route path="results" element={<ResultList />}></Route>
        </Route>
        <Route path="/viewfile" element={<ViewFilesT />} />
        {/* Account setting */}
        <Route path="/setting" element={<AccountSetting />}>
          <Route path="account" element={<Account />}></Route>
          <Route path="change-password" element={<ChangePassword />}></Route>
          <Route
            path="deactivate-account"
            element={<DeactivateAccount />}
          ></Route>
          <Route path="delete-account" element={<DeleteAccount />}></Route>
        </Route>
        {/* Student side */}
        <Route path="/student" element={<StuIndex />} />
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
