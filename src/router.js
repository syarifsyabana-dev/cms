import React from "react";
import MainLayout from "./components/layouts/main";
import DashboardPage from "./pages/dashboard";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/users/Index";

function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </MainLayout>
  );
}

export default Router;
