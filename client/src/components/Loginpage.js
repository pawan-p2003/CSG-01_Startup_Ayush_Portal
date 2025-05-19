import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //usenavigate hook
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage("");
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const payload = isLogin
      ? { email, password }
      : { username, email, password };

    try {
      const response = await axios.post(endpoint, payload);

      if (isLogin) {
        const { token, user } = response.data;

        // ✅ Save token in localStorage
        localStorage.setItem("token", token);

        // Optionally save user details
        localStorage.setItem("user", JSON.stringify(user));

        setMessage("Login successful!");
        // Navigate to dashboard or home page here
        navigate("/dashboard");
      } else {
        setMessage("Registration successful! Please login.");
        toggleMode(); // Switch to login mode after registration
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Something went wrong";
      setMessage(errMsg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E9E3E6]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#736F72]">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
            required
          />

          <button
            type="submit"
            className="w-full py-2 text-white bg-[#736F72] rounded-lg hover:bg-[#9A8F97]"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm text-[#961e1e]">{message}</p>
        )}

        <p className="text-center text-[#736F72]">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={toggleMode}
            className="text-[#9A8F97] underline ml-1"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>

        <Link to="/" className="block text-center text-[#9A8F97] underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Loginpage;
