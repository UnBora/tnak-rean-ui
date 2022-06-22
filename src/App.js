import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";
import Index from "./pages/Index";
import Register from "./components/Register";
import FormSubmit from "./pages/student/FormSubmit";
import ViewWorkForSub from "./pages/student/ViewWorkForSub";
import DeactivateAccount from "./components/SettingAcc/DeactivateAccount";
import DeleteAccount from "./components/SettingAcc/DeleteAccount";
import ChangePassword from "./components/SettingAcc/ChangePassword";
import Account from "./components/SettingAcc/Account";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
