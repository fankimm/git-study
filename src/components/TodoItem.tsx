// import "./TodoItem.css";
import styles from "../../styles/TodoItem.module.css";
export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={todo.done ? styles.TodoItem_done : styles.TodoItem}>
      <span className={styles.text}>{todo.text}</span>
      <span className={styles.remove}>(X)</span>
    </li>
  );
}

export default TodoItem;
