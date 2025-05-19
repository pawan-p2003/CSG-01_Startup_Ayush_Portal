// src/components/PrivateRoute.js
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null); // null = loading
  const token = localStorage.getItem("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/token/verifytoken",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data.valid) {
          setIsValid(true);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setIsValid(false);
        }
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsValid(false);
      }
    };

    if (token) {
      verifyToken();
    } else {
      setIsValid(false);
    }
  }, [token]);

  if (isValid === null) {
    return <div>Loading...</div>; // Optional: A spinner or skeleton loader
  }

  return isValid ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
