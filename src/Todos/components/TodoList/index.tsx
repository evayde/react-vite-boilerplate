import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todoStore } = useStore();

  return (
    <ul className={styles.list}>
      {todoStore.list.map((l) => (
        <li key={l.id}>{l.title}</li>
      ))}
    </ul>
  );
};

export default observer(TodoList);
