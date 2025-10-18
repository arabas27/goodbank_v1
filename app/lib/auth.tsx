import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "./api";
import type { Role, User } from "./types";

type AuthState = {
  user?: User | null;
  loading: boolean;
  login: (u: string, p: string) => Promise<boolean>;
  loginStudent: (studentCode: string) => Promise<boolean>;
  logout: () => void;
};

const AuthCtx = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("goodbank_auth");
    if (stored) {
      const u = JSON.parse(stored) as User;
      setUser(u);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("goodbank_auth", JSON.stringify(user));
    else localStorage.removeItem("goodbank_auth");
  }, [user]);

  useEffect(() => {
    const role = user?.role as Role | undefined;
    document.body.classList.remove("theme-student", "theme-staff");
    if (!role) return;
    if (role === "student") document.body.classList.add("theme-student");
    else document.body.classList.add("theme-staff");
  }, [user?.role]);

  const value = useMemo<AuthState>(() => ({
    user,
    loading,
    login: async (username: string, password: string) => {
      const res = await api.login(username, password);
      if (!res.ok || !res.data) return false;
      setUser(res.data);
      return true;
    },
    loginStudent: async (studentCode: string) => {
      const res = await api.loginByStudentId(studentCode);
      if (!res.ok || !res.data) return false;
      setUser(res.data);
      return true;
    },
    logout: () => setUser(null),
  }), [user, loading]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function useToken() {
  const { user } = useAuth();
  return user?.token || "";
}

