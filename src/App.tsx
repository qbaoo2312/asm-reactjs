import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import DetailPage from './components/Pages/DetailPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="detail" element={<DetailPage />} />
      </Route>
    </Routes>
</div>
  );
}

export default App;
