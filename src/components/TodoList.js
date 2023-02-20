import "./TodoList.css";

function TodoList({ todosList, deleteTodos, todoIsCompleted }) {
  return (
    <div>
      <h2>Todo List</h2>
      {todosList.map((e, index) => (
        <p>
          <span
            onClick={() => todoIsCompleted(index)}
            className={e.isCompleted ? "todoComplete" : "todoItem"}
          >
            {e.todo}
          </span>
          -
          <button
            onClick={() => {
              deleteTodos(e.id);
            }}
          >
            <ion-icon name="trash"></ion-icon>
          </button>
        </p>
      ))}
    </div>
  );
}
export default TodoList;
