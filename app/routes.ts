import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  { path: "/login", file: "routes/login.tsx" },
  { path: "/dashboard", file: "routes/dashboard.tsx" },
  { path: "/teacher", file: "routes/teacher.tsx" },
  { path: "/student", file: "routes/student.tsx" },
  { path: "/parent", file: "routes/parent.tsx" },
  { path: "/admin", file: "routes/admin.tsx" },
] satisfies RouteConfig;
