import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";
import Register from "./components/Register";
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
      <Navbar />
      <Routes>
      <Route path="/" element={<IndexV2 />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
       
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
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
