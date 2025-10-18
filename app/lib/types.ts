export type Role = "student" | "parent" | "teacher" | "admin" | "director";

export interface User {
  id: number;
  username: string;
  displayName: string;
  role: Role;
  token?: string;
}

export interface Student {
  id: number;
  studentCode: string; // รหัสนักเรียน
  firstName: string;
  lastName: string;
  classId: number;
  level: string; // เช่น ป.1, ม.2
}

export interface ClassRoom {
  id: number;
  name: string; // 1/1, 2/3
  level: string; // ป.1, ม.2
}

export interface BehaviorRecord {
  id: number;
  studentId: number;
  teacherId: number;
  points: number; // บวกหรือลบ
  detail: string;
  issuedAt: string; // ISO date
  category?: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

