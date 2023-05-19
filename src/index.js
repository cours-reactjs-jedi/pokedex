import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Root from "./pages/root";
import reportWebVitals from "./reportWebVitals";
import PokemonList from "./pages/PokemonList/PokemonList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hello from './components/Hello';
import PokemonPage, {loaderPokemon} from './pages/PokemonPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/pokemon-list",
        element: <PokemonList />,
      },
      {
        path: "/pokemon-list/:pokeid",
        element: <PokemonPage/>,
        loader: loaderPokemon
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
