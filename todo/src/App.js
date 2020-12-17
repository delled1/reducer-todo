import './App.css';
import ToDoList from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm"

function App() {
  return (
    <div className="App">
              <h1>THIS IS TODO LIST</h1>
      <ToDoList />
      <ToDoForm />
    </div>
  );
}

export default App;
