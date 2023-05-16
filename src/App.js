
import './App.css';



import TodoList from './components/TodoList';

function App() {

  const title = "What is your plan ?";


  return (
    
    <div className='App'>
      <TodoList h1={title}/>
    </div>
  );
}

export default App;
