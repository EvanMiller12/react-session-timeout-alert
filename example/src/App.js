import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Login
  },
  {
    path: "/home",
    Component: Home
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}
