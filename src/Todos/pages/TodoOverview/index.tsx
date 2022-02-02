import { lazy } from "react";
import HeroImage from "../../../resources/ui/hero_background.jpg";
import IconImage from "../../../resources/ui/icon.png";

const TodoForm = lazy(() => import("../../components/TodoForm"));
const TodoList = lazy(() => import("../../components/TodoList"));

const TodoOverview = () => {
  return (
    <>
      <img src={HeroImage} />
      <img src={IconImage} />
      <h1>Todos Overview</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoOverview;
