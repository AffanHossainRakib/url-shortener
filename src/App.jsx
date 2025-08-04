import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Children } from "react";
import AppLayout from "./layouts/app-layout";
import UrlProvider from "./context";

import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing";
import Link from "./pages/link";
import RedirectLink from "./pages/redirected-link";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
