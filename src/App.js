import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard";
import DaftarMahasiswa from "./pages/DaftarMahasiswa";
import DaftarDosen from "./pages/DaftarDosen.jsx";
import DaftarJadwalKuliah from "./pages/DaftarJadwalKuliah.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/daftarjadwalkuliah" element={<DaftarJadwalKuliah />} />
        <Route path="/daftardosen" element={<DaftarDosen />} />
        <Route path="/daftarmahasiswa" element={<DaftarMahasiswa />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
