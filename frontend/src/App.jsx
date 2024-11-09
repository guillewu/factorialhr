import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BikeBuilder from "./features/BikeBuilder/components/BikeBuilder";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Root from "./Root";
import Summary from "./features/Summary/components/Summary";
import Home from "./features/Home/components/Home";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/bike-builder",
        loader: async () => redirect("/bike-builder/frame"),
      },
      { path: "/bike-builder/frame", element: <BikeBuilder /> },
      { path: "/bike-builder/wheel", element: <BikeBuilder /> },
      { path: "/bike-builder/chain", element: <BikeBuilder /> },
      { path: "/bike-builder/summary", element: <Summary /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
