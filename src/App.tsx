import { useEffect, useState } from "react";
import { TodoInput } from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState<String[]>([]);
  const [todoValue, setTodoValue] = useState<String | null>("");

  const persistData = (newList: typeof todos) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddTodos = (newTodo: string) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
    // setTodos((currentTodoList) => [...currentTodoList, newTodo]);
  };

  const handleDeleteTodo = (index: number) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
    // setTodos((currentTodoList) =>
    //   currentTodoList.filter((todo, todoIndex) => {
    //     return todoIndex !== index;
    //   })
    // );
  };

  const handleEditTodo = (index: number) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    console.log("read from local storage", localTodos);
    const temp = JSON.parse(localTodos);
    setTodos(temp);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
