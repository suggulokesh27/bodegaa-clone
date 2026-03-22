import { setAuthToken } from "@/services/api";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync("token");
        const storedUser = await SecureStore.getItemAsync("user");

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.log("Auth load error", e);
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  const login = async (data: any) => {
    setUser(data.user);
    setToken(data.token);

    await SecureStore.setItemAsync("token", data.token);
    await SecureStore.setItemAsync("user", JSON.stringify(data.user));
  };

  const logout = async () => {
    setUser(null);
    setToken(null);

    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
  };

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
