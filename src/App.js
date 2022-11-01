import "./style.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/ListTodo/TodoList";

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
