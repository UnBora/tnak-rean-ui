import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
