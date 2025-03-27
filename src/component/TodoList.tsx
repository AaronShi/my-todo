import TodoCard from "./TodoCard";

export default function TodoList(props: any) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo: any, todoIndex: number) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
