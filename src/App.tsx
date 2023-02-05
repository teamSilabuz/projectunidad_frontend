import React from 'react';
import './App.css';
import { Routes, Route, Navigate  } from "react-router-dom";
import { ExtCredentialPage, Gestor, LoginPage, RegisterPage} from "./pages";
import { getCurrentUser } from './services/auth';
import { ProtectedRoute } from './router/ProtectedRoute';
import { PublicRoute } from './router/PublicRoute';

function App() {
  const current_user = getCurrentUser();
  return (
    <Routes>
       <Route element={<ProtectedRoute user={current_user} />}>
        <Route path="/external-credential" element={<ExtCredentialPage/>} />
      </Route>
      <Route element={<PublicRoute user={current_user} />}>
        <Route path="/home" element={<Gestor/>} />
        <Route index  path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="" element={<Navigate to="/login" replace />}></Route>
      </Route>
    </Routes>
  );
}


export default App;
