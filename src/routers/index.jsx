import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Index";
import About from "../pages/About";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/blogs/Index";
import SinglePost from "../pages/blogs/_id";
import { postById, posts } from "../pages/apis/Loader";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <SinglePost />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
