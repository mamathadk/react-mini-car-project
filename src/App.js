import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState([
    { todo: "Complete the task", isCompleted: false, id: 1 },
    { todo: "Go to Gym", isCompleted: false, id: 2 },
    { todo: "wake up in the morning", isCompleted: false, id: 3 },
    { todo: "Buy a phone", isCompleted: false, id: 4 },
  ]);

  function addTodoFunc(todoValue) {
    setTodos([
      ...todos,
      { todo: todoValue, isCompleted: false, id: Math.random() },
    ]);
    console.log(todoValue);
  }
  function deleteTodo(id) {
    setTodos(todos.filter((e) => e.id !== id));
    console.log(id);
  }
  function todoIsCompleted(index) {
    let newArray = [...todos];
    if (newArray[index].isCompleted) {
      newArray[index].isCompleted = false;
    } else {
      newArray[index].isCompleted = true;
    }
    setTodos(newArray);
  }
  return (
    <div className="App">
      <p>Todo List -Mamatha</p>
      {/* {todos.map((e) => (
        <p>{e.todo}</p>
      ))} */}
      <CreateTodo todoFunc={addTodoFunc} />
      <TodoList
        todosList={todos}
        deleteTodos={deleteTodo}
        todoIsCompleted={todoIsCompleted}
      />
    </div>
  );
}
export default App;
