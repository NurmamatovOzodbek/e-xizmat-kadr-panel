import { Route, Routes, Navigate } from "react-router-dom";
import { Login, Home, StudentsPage } from "../../pages";

import PrivateRoute from "../Private/Private";
import { Layout } from "../../Layout/Layout";

export function Router() {
  return (
    <Routes>
      <Route
        path="/kadr/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/kadr/home" element={<Home />} />
        <Route path="/kadr/students" element={<StudentsPage />} />
      </Route>

      <Route path="/auth-login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/auth-login" />} />
    </Routes>
  );
}
