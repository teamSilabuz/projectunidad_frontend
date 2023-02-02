import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Gestor } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Gestor/>} />
    </Routes>
  );
}


export default App;
