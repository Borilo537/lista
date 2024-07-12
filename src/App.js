// App.js
import './App.css';
import Alterna from './Components/Alterna';
import Contador from './Components/Contador';
import TodoList from './Components/Exibelista';
import { DarkModeProvider } from './Hooks/DarkModeContext';
import DarkModeButton from './Components/DarkModeButton';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <DarkModeButton />
        </div>
        <Contador />
        <Alterna />
        <TodoList />
      </div>
    </DarkModeProvider>
  );
}

export default App;
