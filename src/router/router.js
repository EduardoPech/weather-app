import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

export default router;
