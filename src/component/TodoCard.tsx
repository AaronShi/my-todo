import { useState } from "react";

export default function TodoCard(props: any) {
  const { children, handleCompleted, handleDeleteTodo, handleEditTodo, index } =
    props;

  const [completed, setCompleted] = useState(children.completed);

  return (
    <li className="todoItem">
      <p
        className={completed ? "completed" : ""}
        onClick={() => {
          setCompleted(!completed);
          handleCompleted(index);
        }}
      >
        {children.item}
      </p>
      <div className="actionsContainer">
        <i
          className={
            completed ? "fa-regular fa-circle-check" : "fa-regular fa-circle"
          }
          onClick={() => {
            setCompleted(!completed);
            handleCompleted(index);
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {
            handleEditTodo(index);
          }}
        ></i>
        <i
          className="fa-regular fa-trash-can"
          onClick={() => {
            handleDeleteTodo(index);
          }}
        ></i>
      </div>
    </li>
  );
}
