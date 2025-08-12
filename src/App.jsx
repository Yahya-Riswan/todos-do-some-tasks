import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setTodo, addTodo, deleteTodo, updateTodo } from "./redux/todosReducer";

function App() {
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState("");
  const input = useRef();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

 useEffect(() => {
    if(todos){
      localStorage.setItem("todos",JSON.stringify(todos))
    }
  },[todos])

  // Add Todo
  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  // Update Todo
  const handleUpdateTodo = (todo, target) => {
    if (target === "completed") {
      dispatch(
        updateTodo({
          ...todo,
          completed: !todo.completed,
        })
      );
    }

    if (target === "title") {
      setUpdate(todo);
      setTitle(todo.title);
      input.current.focus();
    }

    if (target === "update") {
      dispatch(
        updateTodo({
          ...update,
          title: title,
        })
      );
      setUpdate("");
      setTitle("");
    }
  };

  // Delete Todo
  const handleDelete = (todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          ref={input}
          name="title"
          id="title"
          placeholder="ToDos..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              update ? handleUpdateTodo({}, "update") : handleAddTodo();
            }
          }}
        />
        {!update && <button onClick={handleAddTodo}>Add</button>}
        {update && (
          <button onClick={() => handleUpdateTodo({}, "update")}>
            Update
          </button>
        )}
      </div>

      <div className="todos">
        {todos.length < 1 && <h4>No ToDos, Add Some...</h4>}

        {todos.length > 0 &&
          todos.map((todo) => (
            <div
              className={`todo ${todo.completed ? "checked" : ""}`}
              key={todo.id}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleUpdateTodo(todo, "completed")}
              />
              <h3>{todo.title}</h3>
              <button onClick={() => handleUpdateTodo(todo, "title")}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button onClick={() => handleDelete(todo)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
