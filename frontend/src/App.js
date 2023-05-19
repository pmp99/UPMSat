import './App.css';
import {Navigate, BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import CassandraTable from "./pages/CassandraTable";

function App() {
  return(
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path=":tableName" element={<CassandraTable />} />
              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
