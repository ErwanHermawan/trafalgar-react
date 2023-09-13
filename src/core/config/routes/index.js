import Home from "presentation/container/page/Home";
import NotFound from "presentation/container/page/NotFound";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
];

export default routeConfig;
