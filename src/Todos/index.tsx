import { lazy } from "react";
import { useRoutes } from "react-router";

const TodoDetails = lazy(() => import("./pages/TodoDetails"));
const TodoOverview = lazy(() => import("./pages/TodoOverview"));

const Todos = () => {
  const routes = useRoutes([
    { path: "/", element: <TodoOverview /> },
    { path: "/:id", element: <TodoDetails /> },
  ]);

  return routes;
};

export default Todos;
