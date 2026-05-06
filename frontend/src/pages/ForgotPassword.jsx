import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import api from "../api/axios";

function ForgotPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.email || !form.password || !form.confirmPassword) {
      toast.error("Email and password are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Password and confirm password should be same");
      return false;
    }

    if (form.password.trim().length < 4) {
      toast.error("Password should contain at least 4 characters");
      return false;
    }

    return true;
  };

  const resetPassword = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      const res = await api.post("/api/auth/forgot-password", {
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword
      });

      if (res.data.success) {
        toast.success("Password updated successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Password reset failed");
      }
    } catch (err) {
      const message = err.response?.data?.message || "Password reset failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-zinc-900 to-black px-4">
      <Link to="/login" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2 p-3 border border-white/10 bg-white/65 font-semibold rounded-md">
        <IoArrowBackOutline className="text-zinc-600" /> Back to Login
      </Link>
      <div className="w-full max-w-md p-10 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Reset Password</h2>
        <p className="text-center text-white/80 mb-8">Enter your email and a new password.</p>

        <form onSubmit={(e) => { e.preventDefault(); resetPassword(); }} className="flex flex-col gap-4 text-white">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-white/70 text-lg" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Email"
              className="w-full p-3 pl-10 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:bg-white/30 outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-white/70 text-lg" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="New Password"
              className="w-full p-3 pl-10 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:bg-white/30 outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-white/70 text-lg" />
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Confirm Password"
              className="w-full p-3 pl-10 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:bg-white/30 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-white text-indigo-900 rounded-lg font-semibold hover:bg-gray-200 transition ${loading && "cursor-disabled"}`}
          >
            {loading ? "Updating password..." : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
