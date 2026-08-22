// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signup from './Pages/Signup';
import Login from './Pages/Login' ;
import Dashboard from './Pages/Dashboard';
import Homepage from './Pages/Homepage';
import ProtectedRoute from "./Pages/ProtectedRoute";
import Folder from "./Pages/Folder";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        }
    />
    <Route
        path="/folders/:id"
        element={
            <ProtectedRoute>
                <Folder />
            </ProtectedRoute>
        }
    />
     </Routes>
      
     </BrowserRouter>
    </>
  )
}

export default App;
