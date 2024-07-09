import './App.css';
import Alterna from './tabs/alterna';
import Contador from './tabs/contador';
import TodoList from './tabs/exibelista';
 
function App() {
  return (
    <div className="App">
      <Contador />
      <Alterna />
      <TodoList />
    </div>
  );
}
 
export default App;
 