

import './App.css';
import Alterna from './Components/Alterna';
import Contador from './Components/Contador';
import TodoList from './Components/Exibelista';
import DarkMode from './Hooks/Dark';

function App() {


  return (
    

    <div className="App">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>

        <button onClick={DarkMode} style={{ padding: '10px', backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px' }}>
          Mudar modo
        </button>
      </div>
      <Contador />
      <Alterna />
      <TodoList />
    </div>
  );
}

export default App;
