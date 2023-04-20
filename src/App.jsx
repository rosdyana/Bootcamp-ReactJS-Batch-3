import React from "react";
import "../src/assets/css/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductCatalog from "./pages/ProductCatalog";
import PaymentCheckout from "./pages/PaymentCheckout";
import PaymentInstruction from "./pages/PaymentInstruction";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./store";

export const routerList = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductCatalog />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout",
        element: <PaymentCheckout />,
      },
      {
        path: "/payment-instruction",
        element: <PaymentInstruction />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routerList} />
    </Provider>
  );
}

export default App;
