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
import Course from "./pages/student/Course";
import ViewFiles from "./pages/student/ViewFiles";
import AccountSetting from "./pages/AccountSetting";
import NavbarT from "./components/NavbarT";
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
import runOneSignal from "./onesignal";
import OneSignal from "react-onesignal";
import { useEffect } from "react";
import Login from "./pages/authentication/Login";

function App() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.init({
      appId: "1557ea45-8f4a-473d-ad64-dff9355214ec",
      setInitialized: true,
      allowLocalhostAsSecureOrigin: true,
    });
    OneSignal.showSlidedownPrompt();
  });

  function isPushNotificationsEnabledVerbose() {
    console.log("isPushNotificationsEnabledVerbose()");
    Promise.all([
      OneSignal.isPushNotificationsEnabled(),
      OneSignal.getUserId(),
      OneSignal.getRegistrationId(),
      OneSignal.getNotificationPermission(),
      OneSignal.isOptedOut(),
      OneSignal.context.serviceWorkerManager.getActiveState(),
    ])
      .then(
        ([
          isSubscribed,
          userId,
          registrationId,
          notificationPermission,
          optedOut,
          serviceWorkerActive,
        ]) => {
          console.log("Is Completely Subscribed:", isSubscribed);
          console.log("");
          console.log("What is our OneSignal user ID?", userId);
          console.log("What is our push subscription token?", registrationId);
          console.log(
            "What is the notification permission status?",
            notificationPermission
          );
          console.log("Are you manually opted out?", optedOut);
          console.log(
            "Is a service worker registered and active? (should be false on Safari, otherwise should be 'Worker A (Main)')?",
            serviceWorkerActive
          );
     
          console.log(
            "What environment does OneSignal think it's in?",
            OneSignal.sdkEnvironment.getWindowEnv()
          );
        }
      )
      .catch((e) => {
        console.error("Issue determining whether push is enabled:", e);
      });
  }
  isPushNotificationsEnabledVerbose();

  return (
    <div>
      <NavbarT />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        {/* On navbar page */}
        <Route path="/teacher" element={<Home />} />
        <Route path="/all-classwork" element={<AllClasswork />} />
        <Route path="/all-course" element={<AllCourse />} />
        {/* Per class */}
        <Route path="/classroom" element={<ManageClass />}>
          <Route path="students" element={<AllStudent />}></Route>
          <Route path="requests" element={<StudentRequest />}></Route>
          <Route path="classworks" element={<ManageClasswork />}></Route>
          <Route path="courses" element={<ManageCourse />}></Route>
          <Route path="results" element={<ResultList />}></Route>
        </Route>
        <Route path="/viewfile" element={<ViewFilesT />} />

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
