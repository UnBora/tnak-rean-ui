import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import AccountSetting from "./pages/AccountSetting";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/accountsetting" element={<AccountSetting/>}/>
      </Routes>
    </div>
  );
}

export default App;
