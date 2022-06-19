import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";
import Register from "./components/Register";
import IndexV2 from "./pages/IndexV2";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
        <Route path="/" element={<IndexV2 />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
