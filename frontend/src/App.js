import './App.css';
import {Navigate, BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import Data from "./pages/Data";
import Streaming from "./pages/Streaming";

function App() {
  return(
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="telemetry/hk" element={<Data tm={'hk'}/>} />
              <Route path="telemetry/sc" element={<Data tm={'sc'}/>} />
              <Route path="telecommand" element={<Data/>} />
              <Route path="streaming" element={<Streaming/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
