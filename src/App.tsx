import { useEffect, useState } from "react";
import { TodoInput } from "./component/TodoInput";
import TodoList from "./component/TodoList";
import { AppContext, Todo } from "./component/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  const persistData = (newList: typeof todos) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
    setTodos(newList);
  };

  const handleAddTodos = (newTodo: string) => {
    const newTodoList = [ { item: newTodo, completed: false }, ...todos];
    persistData(newTodoList);

  };

  const handleDeleteTodo = (index: number) => {
    const newTodoList = todos.filter((todo: Todo, todoIndex: number) => {
      console.log(todo);
      return todoIndex !== index;
    });
    console.log(newTodoList);
    persistData(newTodoList);

    // setTodos((currentTodoList) =>
    //   currentTodoList.filter((todo, todoIndex) => {
    //     return todoIndex !== index;
    //   })
    // );
  };

  const handleEditTodo = (index: number) => {
    const valueToBeEdited = todos[index]["item"];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  const handleCompleted = (index: number) => {
    todos.map((todo, itemIndex) => {
      if (itemIndex === index) todo.completed = !todo.completed;
    });
    console.log(todos);
    persistData(todos);
  };

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    console.log("read from local storage", localTodos);
    const temp = JSON.parse(localTodos).todos;
    setTodos(temp);
  }, []);

  return (
    <>
      <AppContext.Provider value={todos}>
        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos}
        />
        <TodoList
          handleCompleted={handleCompleted}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </AppContext.Provider>
    </>
  );
}

export default App;
