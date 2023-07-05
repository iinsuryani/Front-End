import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "./styles.css"; // File CSS untuk tampilan

const DaftarJadwalKuliah = () => {
  const [jadwal, setJadwal] = useState([
    { id: 1, kodeMataKuliah: "1256", namaMataKuliah: "Organisasi dan  Arsitektur Komputer", dosenPengampu: "Mukhtar Hanafi", prodi: "Teknik Informatika (21B)", hari: "Senin", waktu: " 13.10 - 14.50", ruang: "C-303" },
    { id: 2, kodeMataKuliah: "1257", namaMataKuliah: "Algorithm", dosenPengampu: "Andy Widiyanto", prodi: "Teknologi Informasi (21)", hari: "Senin", waktu: "07.00-09.30", ruang: "c-205" },
    { id: 3, kodeMataKuliah: "1303", namaMataKuliah: "Interaksi Manusia dan Komputer", dosenPengampu: "Agus Setiawan, M.Eng", prodi: "Teknik Informatika (20A)", hari: "Rabu", waktu: "09.30 - 12.00", ruang: "C-301" },
    { id: 4, kodeMataKuliah: "1491", namaMataKuliah: "Basic Electric & Electronics", dosenPengampu: "Muji Setiyo", prodi: "Teknik Otomotif (21)", hari: "Senin", waktu: "13.10-14.50", ruang: "f-03" },
    { id: 5, kodeMataKuliah: "1567", namaMataKuliah: "Jaringan Komputer", dosenPengampu: "Purwono Hendradi, M.Kom.", prodi: "Teknik Informatika (20A)", hari: "Senin", waktu: "08.40 - 12.00", ruang: "C-201" },
    { id: 6, kodeMataKuliah: "1746", namaMataKuliah: "OOP", dosenPengampu: "Mukhtar Hanafi", prodi: "Teknologi Informasi (20)", hari: "Kamis", waktu: "08.40-12.00", ruang: "c-206" },
    { id: 7, kodeMataKuliah: "1986", namaMataKuliah: "Fluid Mechanics", dosenPengampu: "Bagiyo Condro Purnomo", prodi: "Teknik Otomotif (20)", hari: "Kamis", waktu: "07.50-09.30", ruang: "f-04" },
    { id: 8, kodeMataKuliah: "2498", namaMataKuliah: "Pemrograman Web", dosenPengampu: "Setiya Nugroho, S.T., M.Eng. ", prodi: "Teknik Informatika (20A)", hari: "Kamis", waktu: "13.10 - 14.50", ruang: "C-201" },
    { id: 9, kodeMataKuliah: "2542", namaMataKuliah: "Database Networking", dosenPengampu: "R.Arry Widyanto", prodi: "Teknologi Informasi (20)", hari: "Rabu", waktu: "07.00-09.30", ruang: "c-206" },
    { id: 10, kodeMataKuliah: "2643", namaMataKuliah: "Algorithm", dosenPengampu: "Maimunah S.Si", prodi: "Teknik Informatika (21A)", hari: "Selasa", waktu: "07.00-09.30", ruang: "c-303" },
    { id: 11, kodeMataKuliah: "4163", namaMataKuliah: "AWP", dosenPengampu: "Andy Widiyanto", prodi: "Teknologi Informasi (20)", hari: "Senin", waktu: "07.50-10.20", ruang: "c-206" },
    { id: 12, kodeMataKuliah: "4516", namaMataKuliah: "Thernodinamy", dosenPengampu: "Bagiyo Condro Purnomo", prodi: "Teknik Otomotif (21)", hari: "selasa", waktu: "07.50-09.30", ruang: "f-03" },
    { id: 13, kodeMataKuliah: "5498", namaMataKuliah: "Statistika Struktur", dosenPengampu: "Budi Waluyo", prodi: "Teknik Mesin(21)", hari: "Selasa", waktu: "10.20-12.00", ruang: "D-306" },
    { id: 14, kodeMataKuliah: "5605", namaMataKuliah: "Kimia Dasar", dosenPengampu: "Imron Rosyidi", prodi: "Teknik Mesin(21)", hari: "Kamis", waktu: "09.30-12.00", ruang: "D-306" },
    { id: 15, kodeMataKuliah: "5696", namaMataKuliah: "Fisika Dasar", dosenPengampu: "Bagiyo Condro Purnomo", prodi: "Teknik Industri (21)", hari: "Rabu", waktu: "09.30-12.00", ruang: "c-306" },
    { id: 16, kodeMataKuliah: "5984", namaMataKuliah: "Workshop Management", dosenPengampu: "Muji Setiyo", prodi: "Teknik Otomotif (20)", hari: "Rabu", waktu: "13.10-14.50", ruang: "f-04" },
    { id: 17, kodeMataKuliah: "5986", namaMataKuliah: "Digital Media", dosenPengampu: "Bambang Pujiarto", prodi: "Teknologi Informasi (21)", hari: "Selasa", waktu: "07.00-09.30", ruang: "c-206" },
    { id: 18, kodeMataKuliah: "6431", namaMataKuliah: "Statistika dan Probabilitas", dosenPengampu: "Emilya Ully Artha, M.Kom.", prodi: "Teknik Informatika (20A)", hari: "Selasa ", waktu: "09.30 - 12.00", ruang: "c-301" },
    { id: 19, kodeMataKuliah: "6434", namaMataKuliah: "Logika Pemrograman", dosenPengampu: "R. Arri Widyanto, S.Kom.,MT", prodi: "Teknik Industri (20)", hari: "Rabu", waktu: "09.30-12.00", ruang: "c-109" },
    { id: 20, kodeMataKuliah: "6468", namaMataKuliah: "Pengantar Teknik Industri", dosenPengampu: "Ir. Moehamad Aman, MT", prodi: "Teknik Industri (21)", hari: "Selasa", waktu: "07.00-08.40", ruang: "c-305" },
    // Tambahkan data jadwal kuliah lainnya di sini
  ]);

  const handleEdit = (id) => {
    // Implementasikan logika untuk mengedit data jadwal kuliah berdasarkan ID
    console.log(`Edit jadwal kuliah dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implementasikan logika untuk menghapus data jadwal kuliah berdasarkan ID
    console.log(`Hapus jadwal kuliah dengan ID: ${id}`);
  };

  return (
    <Sidebar>
      <div>
        <h1>Daftar Jadwal Kuliah</h1>
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Kode </th>
              <th>Nama Mata Kuliah</th>
              <th>Dosen Pengampu</th>
              <th>Prodi</th>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Ruang</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((jad) => (
              <tr key={jad.id}>
                <td>{jad.kodeMataKuliah}</td>
                <td>{jad.namaMataKuliah}</td>
                <td>{jad.dosenPengampu}</td>
                <td>{jad.prodi}</td>
                <td>{jad.hari}</td>
                <td>{jad.waktu}</td>
                <td>{jad.ruang}</td>
                <td>
                  <button onClick={() => handleEdit(jad.id)}>Edit</button>
                  <button onClick={() => handleDelete(jad.id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default DaftarJadwalKuliah;
