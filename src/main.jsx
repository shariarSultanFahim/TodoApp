import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import AddTask from "./Components/AddTast/AddTask";
import EditTask from "./Components/EditTask/EditTask";
import CompletedTask from "./Components/CompletedTask/CompletedTask";
import Error from "./Components/ErrorElement/Error";
import Home from "./Components/Home/Home";
import AuthProvider from "./Components/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
      {
        path: "/edittask/:id",
        element: <EditTask />,
      },
      {
        path: "/completedtast",
        element: <CompletedTask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
