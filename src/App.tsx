import React from 'react';
import './App.css';
import { Routes, Route, Navigate  } from "react-router-dom";
import { Gestor, LoginPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Gestor/>} />
      <Route index  path="/login" element={<LoginPage/>}></Route>
      <Route path="*" element={<Navigate to="/login" replace />}></Route>
    </Routes>
  );
}


export default App;
