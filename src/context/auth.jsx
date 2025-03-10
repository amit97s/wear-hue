import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/config.url";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 🟢 User is null by default
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
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Auth Response:", data);

      if (data && data.user) {  // ✅ Correctly access "user"
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
        console.log("No user data found, clearing token...");
        localStorage.removeItem("token");
        setUser(null);
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false); // ✅ Only set loading after setting user
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

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
