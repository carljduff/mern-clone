import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

import { useAuthStore } from "./store/useAuthStore.js";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

   if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
