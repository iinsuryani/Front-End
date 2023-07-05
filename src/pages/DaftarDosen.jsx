import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "./styles.css"; // File CSS untuk tampilan

const DaftarDosen = () => {
  const [dosen, setDosen] = useState([
    { id: 1, nidn: "601309501", nama: "Ir. Eko Muh. Widodo, MT", noHP: "086594726896" },
    { id: 2, nidn: "602047502", nama: "Mukhtar Hanafi, ST., MCs.", noHP: "0817466231" },
    { id: 3, nidn: "602128101", nama: "Emilya Ully Artha, M.Kom.", noHP: "081245687782" },
    { id: 4, nidn: "603046801", nama: "Oesman Raliby, ST.,M.Eng", noHP: "0856324597510" },
    { id: 5, nidn: "605107201", nama: "Uky Yudatama, S.SI.,M.Kom", noHP: "084526315896" },
    { id: 6, nidn: "606017303", nama: " Dr. Imam Mawardi, M.Ag", noHP: "087459632150" },
    { id: 7, nidn: "609208245", nama: "Pristi Sukmasetya, S.Komp., M.Kom.", noHP: "086975324659" },
    { id: 8, nidn: "610269018", nama: "Dra. Retno Rusdjijati, M.Kes", noHP: "085627892659" },
    { id: 9, nidn: "612117702", nama: "Maimunah, S. Si., M. Kom", noHP: "089562341026" },
    { id: 10, nidn: "613066301", nama: "Ir. Moehamad Aman, MT", noHP: "086256314975" },
    { id: 11, nidn: "617088801", nama: "Agus Setiawan, M.Eng.", noHP: "087456398210" },
    { id: 12, nidn: "620127805", nama: "Suroto Munahar,ST.,M.T.", noHP: "087459632100" },
    { id: 13, nidn: "623087901", nama: "Andi Widiyanto, M.Kom", noHP: "08156753019" },
    { id: 14, nidn: "623107802", nama: "Bambang Pujiarto, M.Kom", noHP: "085624871562" },
    { id: 15, nidn: "624077101", nama: "Purwono Hendradi, M.Kom", noHP: "087569412302" },
    { id: 16, nidn: "626037302", nama: "Tuessi Ari Purnomo, ST., M.Tech.", noHP: "085627256142" },
    { id: 17, nidn: "626127201", nama: "Muhammad Imron Rosyidi, ST., M.Si", noHP: "085562253102" },
    { id: 18, nidn: "627038302", nama: "Muji Setiyo, ST., MT.", noHP: "085632410526" },
    { id: 19, nidn: "627057701", nama: "Budi Waluyo, ST, MT", noHP: "088665471230" },
    { id: 20, nidn: "628078503", nama: "Rochim Widaryanto S.T., MT.", noHP: "087445699210" },
  ]);

  const handleEdit = (id) => {
    // Implementasikan logika untuk mengedit data dosen berdasarkan ID
    console.log(`Edit dosen dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implementasikan logika untuk menghapus data dosen berdasarkan ID
    console.log(`Hapus dosen dengan ID: ${id}`);
  };

  return (
    <Sidebar>
      <div>
        <h1>Daftar Dosen</h1>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>NIDN</th>
              <th>Nama Dosen</th>
              <th>No HP</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dosen.map((dsn) => (
              <tr key={dsn.id}>
                <td>{dsn.nidn}</td>
                <td>{dsn.nama}</td>
                <td>{dsn.noHP}</td>
                <td>
                  <button onClick={() => handleEdit(dsn.id)}>Edit</button>
                  <button onClick={() => handleDelete(dsn.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default DaftarDosen;
