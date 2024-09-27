import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TaskManageLayOut from "../layouts/TaskManagLayOut/TaskManageLayOut.jsx";
import TaskManagePage from "../pages/TaskManagPage/TaskManagePage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TaskManageLayOut />,
    children: [{ index: true, element: <TaskManagePage /> }],
  },
  // we can add another urls with defferent Layouts and pages :
]);

const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AppRoutes;
