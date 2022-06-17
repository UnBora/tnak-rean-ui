import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";
import Index from "./pages/Index";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/accountsetting" element={<AccountSetting/>}/>
        <Route path="/index" element={<Index/>} />
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
