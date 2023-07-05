import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { Link } from "react-router-dom";
import "./styles.css"; // File CSS untuk tampilan

const DaftarMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, npm: "2005001001", nama: "Lufita Anggraeni", prodi: "Teknik Industri", alamat: "Tegalrejo", noHP: "085346214598", semester: "6" },
    { id: 2, npm: "2005010002", nama: "Huda Rahman", prodi: "Teknik Industri", alamat: "Grabag", noHP: "08512586345", semester: "6" },
    { id: 3, npm: "2005010003", nama: "Nuraini S", prodi: "Teknik Industri", alamat: "Salaman", noHP: "082145824456", semester: "6" },
    { id: 4, npm: "2005010004", nama: "Guntur Setya", prodi: "Teknik Industri", alamat: "Ngablak", noHP: "08753694125", semester: "6" },
    { id: 5, npm: "2005010005", nama: "Tio Ariansyah", prodi: "Teknik Industri", alamat: "Muntilan", noHP: "087569241235", semester: "6" },
    { id: 6, npm: "2005010032", nama: "Esthi Agustin Saputri", prodi: "Teknik Industri", alamat: "Cirebon", noHP: "085639745210", semester: "6" },
    { id: 7, npm: "2005020012", nama: "Gea Fitri", prodi: "Teknologi Informasi", alamat: "Lampung", noHP: "085624569872", semester: "6" },
    { id: 8, npm: "2005020019", nama: "Deri", prodi: "Teknologi Informasi", alamat: "Kudus", noHP: "085633697456", semester: "6" },
    { id: 9, npm: "2005020043", nama: "Titin Erlinda", prodi: "Teknologi Informasi", alamat: "Salam", noHP: "088754623598", semester: "6" },
    { id: 10, npm: "2005020055", nama: "Lovita Andrianingsih", prodi: "Teknologi Informasi", alamat: "Bogor", noHP: "081223056289", semester: "6" },
    { id: 11, npm: "2005020078", nama: "Astri", prodi: "Teknologi Informasi", alamat: "Mertoyudan", noHP: "087544522365", semester: "6" },
    { id: 12, npm: "2005030018", nama: "Reza Darmansyah", prodi: "Teknik Otomotif", alamat: "Blabak", noHP: "085624184678", semester: "6" },
    { id: 13, npm: "2005030019", nama: "Budi", prodi: "Teknik Otomotif", alamat: "Magelang", noHP: "087564210023", semester: "6" },
    { id: 14, npm: "2005030030", nama: "Iqbal Rizaldi", prodi: "Teknik Otomotif", alamat: "Sawangan", noHP: "082356974521", semester: "6" },
    { id: 15, npm: "2005030064", nama: "Mochamad Afnan Arifin", prodi: "Teknik Otomotif", alamat: "Pakis", noHP: "085631547955", semester: "6" },
    { id: 16, npm: "2005030109", nama: "Tri Setyo Wicaksono", prodi: "Teknik Otomotif", alamat: "Banten", noHP: "085624632578", semester: "6" },
    { id: 17, npm: "2005040003", nama: "Rendi Sulistyo", prodi: "Teknik Informatika", alamat: "Magelang Utara", noHP: "0825364578556", semester: "6" },
    { id: 18, npm: "2005040012", nama: "Sela Marcia", prodi: "Teknik Informatika", alamat: "Bandongan", noHP: "086597423514", semester: "6" },
    { id: 19, npm: "2005040014", nama: "Susi Laria", prodi: "Teknik Informatika", alamat: "Sumedang", noHP: "085697541235", semester: "6" },
    { id: 20, npm: "2005040026", nama: "R. Devina Endsuy", prodi: "Teknik Informatika", alamat: "Muntilan", noHP: "087659243654", semester: "6" },
    // Tambahkan data mahasiswa lainnya di sini
  ]);

  const handleEdit = (id) => {
    // Implementasikan logika untuk mengedit data mahasiswa berdasarkan ID
    console.log(`Edit mahasiswa dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implementasikan logika untuk menghapus data mahasiswa berdasarkan ID
    console.log(`Hapus mahasiswa dengan ID: ${id}`);
  };

  return (
    <Sidebar>
      <div>
        <h1>Daftar Mahasiswa</h1>
        <br></br>
        <Link to="/Semester_2">
          <button>Semester 2</button>
        </Link>
        <Link to="/Semester_4">
          <button>Semester 4</button>
        </Link>
        <Link to="/Semester_6">
          <button>Semester 6</button>
        </Link>
        <br></br>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>NPM</th>
              <th>Nama</th>
              <th>Prodi</th>
              <th>Alamat</th>
              <th>No HP</th>
              <th>Semester</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.id}>
                <td>{mhs.npm}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.prodi}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.noHP}</td>
                <td>{mhs.semester}</td>
                <td>
                  <button onClick={() => handleEdit(mhs.id)}>Edit</button>
                  <button onClick={() => handleDelete(mhs.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default DaftarMahasiswa;
