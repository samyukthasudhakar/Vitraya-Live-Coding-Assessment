import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UploadForm from './pages/UploadForm';

function App() {

  return(
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/upload-image" element={<UploadForm />}></Route>
    </Routes>
  )
}

export default App;
