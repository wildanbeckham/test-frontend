import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Index from "./Pages/HomePage/Index";
import IndexList from "./Pages/ListProfille/IndexList";
import ReadList from "./Pages/ListProfille/ReadList";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-center"></ToastContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/list-proflie" element={<IndexList />} />
          <Route path="/list-proflie/read/:id" element={<ReadList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
