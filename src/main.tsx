import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { StoreContext } from "./stores";

const App = lazy(() => import("./App"));
const Todos = lazy(() => import("./Todos"));

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Suspense fallback={<>loading...</>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/todos/*" element={<Todos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
