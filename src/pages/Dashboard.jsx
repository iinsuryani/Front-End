import React from "react";
import Sidebar from "./Sidebar.jsx";
import { Link } from "react-router-dom";

import "./hmm.css"; // File CSS untuk tampilan

const Dashboard = () => {
  return (
    <Sidebar>
      <div>
        <h1>Dashboard</h1>
        <br></br>
      </div>
      <div className="dashboard">
        <div className="dashboard-item">
          <h3>Daftar Mahasiswa</h3>
          <br></br>
          <h1>77</h1>
          <br></br>
          <Link to="/DaftarMahasiswa">
            <button>Lihat Detail</button>
          </Link>
          {/* Tambahkan komponen DaftarMahasiswa */}
        </div>
        <div className="dashboard-item">
          <h3>Daftar Dosen</h3>
          <br></br>
          <h1>60</h1>
          <br></br>
          <Link to="/DaftarDosen">
            <button>Lihat Detail</button>
          </Link>
          {/* Tambahkan komponen DaftarDosen */}
        </div>
        <div className="dashboard-item">
          <h3>Daftar Jadwal Kuliah</h3>
          <br></br>
          <h1>55</h1>
          <br></br>
          <Link to="/DaftarJadwalKuliah">
            <button>Lihat Detail</button>
          </Link>
          {/* Tambahkan komponen DaftarJadwalKuliah */}
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1>Kalender Akademik</h1>
        <img src="/src/img/kaldik.jpg" alt="Gambar Contoh" />
      </div>
    </Sidebar>
  );
};

export default Dashboard;
