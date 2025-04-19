import TodoCard from "./TodoCard";
import { Todo, useAppContext } from "./Todo";

export default function TodoList(props: any) {
  const {} = props;
  const todos = useAppContext();

  return (
    <ul className="main">
      {todos?.map((todo: Todo, todoIndex: number) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            {todo}
          </TodoCard>
        );
      })}
    </ul>
  );
}
