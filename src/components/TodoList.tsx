import TodoItem from "./TodoItem";

function TodoList() {
  const todos = [
    { id: 1, text: "context api 배우기", done: true },
    { id: 2, text: "ts 배우기", done: true },
    { id: 3, text: "ts와 context api 함께 사용하기", done: false },
  ];
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
}

export default TodoList;
