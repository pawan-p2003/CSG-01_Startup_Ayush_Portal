import { useState } from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#E9E3E6]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-[#736F72]">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A8F97]"
          />

          <button className="w-full py-2 text-white bg-[#736F72] rounded-lg hover:bg-[#9A8F97]">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-[#736F72]">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
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
