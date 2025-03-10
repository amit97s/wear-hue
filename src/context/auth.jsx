import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/config.url";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
    phone: null,
    token: "",
    isAuthenticated: false,
  });
  const [loading, setLoading] = useState(true);

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token"); 
      console.log("Retrieved Token:", token); // Debugging line

    //   if (token) {
        console.log("Making API request to:", `${BACKEND_URL}/auth`);
        
        const { data } = await axios.post(`${BACKEND_URL}/auth/session`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("API Response:", data); // Log full response

        if (data?.data?.user) {
          console.log("User Authenticated:", data.data.user);
          setUser({
            id: data.data.user._id,
            name: data.data.user.name,
            email: data.data.user.email,
            phone: data.data.user.phone,
            token: token,
            isAuthenticated: true,
          });
        }
         else {
          console.log("No user data found, clearing token...");
          // localStorage.removeItem("token");
          // setUser({ ...user, isAuthenticated: false });
        }
    //   }
      
      
      
      
      
      
      
      
    //   else {
        // console.log("No token found in localStorage");
        // setUser({ ...user, isAuthenticated: false });
    //   }
    } catch (error) {
      console.error("Authentication Error:", error);
      // localStorage.removeItem("token");
      // setUser({ ...user, isAuthenticated: false });
    } finally {
      console.log("Auth check completed");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  const logout = () => {
    console.log("Logging out...");
    // localStorage.removeItem("token");
    setUser({
      id: null,
      name: null,
      email: null,
      phone: null,
      token: "",
      isAuthenticated: false,
    });
  };

  const isAuthenticated = () => {
    console.log("User Authentication Status:", user.isAuthenticated);
    return user.isAuthenticated;
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
