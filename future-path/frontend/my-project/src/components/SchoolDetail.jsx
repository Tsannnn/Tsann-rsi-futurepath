// components/SchoolDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolDetail = ({ schools }) => {
  const { id } = useParams(); // Mengambil id dari URL
  const school = schools.find(s => s.id === parseInt(id)); // Mencari sekolah berdasarkan id

  if (!school) {
    return <div>School not found!</div>; // Menampilkan pesan jika sekolah tidak ditemukan
  }

  return (
    <div className='m-5'>
      <h1 className='text-3xl font-bold'>{school.name}</h1>
      <p className='mt-4'>{school.description}</p>
      <h2 className='mt-4 text-xl font-semibold'>Informasi Lengkap</h2>
      <p>{school.fullInfo}</p>
    </div>
  );
};

export default SchoolDetail;