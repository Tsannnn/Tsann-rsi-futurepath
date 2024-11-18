// components/PopUpList.js
import React, { useState } from 'react';

const PopUpList = ({ openPopUpList, closePopUpList, title, message, onConfirm, initialQuestion = '', initialAnswer = '', styleType }) => {
  const [question, setQuestion] = useState(initialQuestion); // Untuk nama sekolah
  const [answer, setAnswer] = useState(initialAnswer); // Untuk deskripsi singkat
  const [fullInfo, setFullInfo] = useState(''); // Untuk informasi lengkap
  const [image, setImage] = useState(null); // Untuk file gambar

  const handleClosePopUpList = (e) => {
    if (e.target.id === 'modalContainer') {
      closePopUpList();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Menyimpan data URL gambar
      };
      reader.readAsDataURL(file);
    }
  };

  if (!openPopUpList) return null;

  const styles = {
    default: 'bg-white rounded-lg shadow-lg p-6 w-10/12 md:w-1/3',
    create: 'bg-white rounded-lg shadow-lg p-6 w-10/12 md:w-1/3',
    update: 'bg-white rounded-lg shadow-lg p-6 w-10/12 md:w-1/3',
    delete: 'bg-white rounded-lg shadow-lg p-6 w-10/12 md:w-1/3',
  };

  return (
    <div
      id='modalContainer'
      onClick={handleClosePopUpList}
      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
    >
      <div className={styles[styleType] || styles.default}>
        <h2 className='text-xl font-semibold text-center'>{title}</h2>
        <p className='mt-4 text-center'>{message}</p>
        <div className='mt-4'>
          <input
            type='text'
            placeholder='Nama Sekolah'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className='border border-gray-300 rounded w-full p-2 mb-2'
            required=''
          />
          <input
            type='text'
            placeholder='Alamat'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className='border border-gray-300 rounded w-full p-2 mb-2'
            required=''
          />
          <textarea
            placeholder='Informasi Lengkap'
            value={fullInfo}
            onChange={(e) => setFullInfo(e.target.value)}
            className='border border-gray-300 rounded w-full p-2 mb-2'
            rows='4'
            required=''
          />
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='border border-gray-300 rounded w-full p-2 mb-2'
            required=''
          />
          {image && <img src={image} alt="Preview" className="mt-2 w-40 h-auto" />}
        </div>
        <div className='flex justify-end mt-4'>
          <button
            onClick={closePopUpList}
            className='bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600'
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(question, answer, fullInfo, image)}
            className={`text-white px-4 py-2 rounded hover:bg-opacity-80 ${styleType === 'delete' ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            {styleType === 'delete' ? 'Delete' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpList;