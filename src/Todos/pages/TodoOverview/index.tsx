import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

const TodoOverview = () => {
  return (
    <>
      <h1>Todos Overview</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default TodoOverview;
