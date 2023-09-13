import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "core/config/routes";

const App = () => {
  const router = createBrowserRouter(routeConfig);
  return <RouterProvider router={router} />;
};

export default App;
