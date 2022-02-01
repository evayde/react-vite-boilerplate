import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import store, { StoreContext } from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/todos/*" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
