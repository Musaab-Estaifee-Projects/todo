import { RouterProvider } from "react-router";
import useRouter from "./hooks/useRouter";

function App() {
  const router = useRouter();

  return (
      <RouterProvider router={router} />
  );
}

export default App;
