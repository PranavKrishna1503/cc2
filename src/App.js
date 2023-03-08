import './App.css';
import Delete from './delete';
import EmployeeGetPage from './get';
import Request from './post';
import TodoItem from './put';
function App() {
  return (
    <div className="App">
      <Request/>
      <br/>
      <EmployeeGetPage/>
      <br/>
      <Delete/>
      <TodoItem/>
      <br/>  
      </div>
  );
}

export default App;
