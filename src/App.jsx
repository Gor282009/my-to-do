
import Header from "./components/Header"
import { useState } from 'react';
import './App.css';
function App() {
const [todos, setTodos] = useState([
  { id: 1, text: 'Javascript', Completed: false },
  { id: 2, text: 'Javascript', Completed: false },
  { id: 3, text: 'Javascript', Completed: false }
])
  return (
    <div className="App">
      <Header todos={todos}/>
    </div>
  );
}

export default App;
