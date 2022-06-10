import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/narbar" element={<Navbar/>}/ >

        
      </Routes>
    </div>
  );
}

export default App;
