import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/Home";
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from "./pages/EmployeeList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/scss/base/base.scss"


// Les différentes routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/CreateEmployee",
        element: <CreateEmployee />,
    },
    {
        path: "/EmployeeList",
        element: <EmployeeList />,
    },
]);


/**
 * The App function returns a div with a Router component, including a Header component,
 * Route components and a Footer component. There are 4 Route components , each with a path and an element.
 * Provider makes Store available to every element, while PersistGate makes Store persistent
 * @returns the JS code that will be rendered to the DOM.
 *
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <Header />
          <RouterProvider router={router} />
          <Footer />
      </Provider>
  </React.StrictMode>
);
