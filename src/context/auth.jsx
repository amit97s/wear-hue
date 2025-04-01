import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/config.url";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found in localStorage");
        setLoading(false);
        return;
      }

      const { data } = await axios.post(
        `${BACKEND_URL}/auth/session`,
        {},
        { 
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: function (status) {
            return status < 500; // Only treat 500+ errors as axios errors
          }
        }
      );

      console.log("Auth Response:", data);

      if (data && data.user) {
        setUser({
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          phone: data.user.phone,
          role: data.user.role,
          token: token,
          isAuthenticated: true,
        });
      } else {
        console.log("No user data found");
        setUser(null);
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      // Only remove token if it's an unauthorized error (401) or token is invalid
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        localStorage.removeItem("token");
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null && user.isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};