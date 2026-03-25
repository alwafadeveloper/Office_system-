import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import WebsiteProjectsPage from "./pages/WebsiteProjectsPage";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import { useAuthStore } from "./stores/useAuthStore";
import { Toaster } from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerifyOTPPage from "./pages/VerifyOTPPage";

const Placeholder = ({ pageName }) => (
  <div className="flex items-center justify-center h-screen text-2xl font-bold bg-gray-50">
    {pageName} Page (Coming Soon)
  </div>
);

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderCircle className=" size-10 animate-spin" />
      </div>
    );
  }
  console.log("auth:", authUser);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Placeholder routes for new navbar links */}
        <Route path="/projects/websites" element={authUser ? <WebsiteProjectsPage /> : <Navigate to="/login" />} />
        <Route path="/products" element={authUser ? <Placeholder pageName="Products" /> : <Navigate to="/login" />} />
        <Route path="/collections" element={authUser ? <Placeholder pageName="Collections" /> : <Navigate to="/login" />} />
        <Route path="/about" element={authUser ? <Placeholder pageName="About" /> : <Navigate to="/login" />} />
        <Route path="/contact" element={authUser ? <Placeholder pageName="Contact" /> : <Navigate to="/login" />} />
        <Route path="/profile" element={authUser ? <Placeholder pageName="Profile" /> : <Navigate to="/login" />} />
        <Route path="/cart" element={authUser ? <Placeholder pageName="Cart" /> : <Navigate to="/login" />} />
        <Route path="/orders" element={authUser ? <Placeholder pageName="Orders" /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
