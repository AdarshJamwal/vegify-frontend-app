import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import ErrorPage from "./components/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CategoryPage from "./pages/Home/category/CategoryPage.jsx";
import Search from "./pages/Home/Search.jsx";
import SingleProduct from "./pages/Home/Products/SingleProduct.jsx";
import Recipes from "./pages/Home/Products/Recipes.jsx";
import Resources from "./pages/resources/Resources.jsx";
import About from "./pages/about/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },

      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(
            `https://vegify-recipe-app-backend.vercel.app/api/items/${params.id}`
          ),
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
