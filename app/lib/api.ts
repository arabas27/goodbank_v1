import { API_BASE_URL } from "./config";
import type { ApiResponse, BehaviorRecord, Student, User } from "./types";

async function http<T>(
  path: string,
  opts: RequestInit = {},
  token?: string
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) return { ok: false, error: data?.error || res.statusText };
  return { ok: true, data };
}

export const api = {
  login: (username: string, password: string) =>
    http<User>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }),

  loginByStudentId: (studentCode: string) =>
    http<User>("/auth/login-student", {
      method: "POST",
      body: JSON.stringify({ studentCode }),
    }),

  me: (token: string) => http<User>("/auth/me", {}, token),

  addBehavior: (
    token: string,
    payload: Omit<BehaviorRecord, "id" | "teacherId"> & { studentCode?: string }
  ) => http<BehaviorRecord>("/behaviors", { method: "POST", body: JSON.stringify(payload) }, token),

  getStudent: (token: string, studentCode: string) =>
    http<Student>(`/students/${encodeURIComponent(studentCode)}`, {}, token),

  getBehaviorsByStudent: (token: string, studentCode: string) =>
    http<BehaviorRecord[]>(`/students/${encodeURIComponent(studentCode)}/behaviors`, {}, token),

  getBehaviorsByClass: (token: string, classId: number) =>
    http<BehaviorRecord[]>(`/classes/${classId}/behaviors`, {}, token),

  // Admin examples
  listUsers: (token: string) => http<User[]>("/admin/users", {}, token),
};

