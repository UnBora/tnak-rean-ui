import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Index from "./pages/Index";
import Login from "./components/Register";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/index" element={<Index/>} />
      <Route path="/register" element={<Register/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
