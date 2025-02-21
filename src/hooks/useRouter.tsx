import { createBrowserRouter } from "react-router";
import Layout from "@/pages/layout/layout";
import NotFound from "@/pages/notFound/NotFound";
import Homepage from "@/pages/home/Homepage";
import CreateTask from "@/pages/createTask/CreateTask";
import EditTask from "@/pages/editTask/EditTask";

const useRouter = () => {
  return createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "404",
          element: <NotFound />,
        },
        {
          path: "/create",
          element: <CreateTask />,
        },
        {
          path: "/edit/:id",
          element: <EditTask />,
        },
      ],
    },
  ]);
};

export default useRouter;
