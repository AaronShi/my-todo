export default function TodoCard(props: any) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {handleEditTodo(index)}}
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
