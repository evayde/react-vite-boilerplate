import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";

const TodoList = () => {
  const { todoStore } = useStore();

  return (
    <ul className={"m-4"}>
      {todoStore.list.map((l) => (
        <li className="border p-4 shadow-sm mb-6" key={l.id}>
          {l.title}
        </li>
      ))}
    </ul>
  );
};

export default observer(TodoList);
