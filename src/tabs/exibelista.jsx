import React, { useState } from 'react';
 
function TodoList() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar a lista de tarefas
  const [inputValue, setInputValue] = useState(''); // Estado para armazenar o valor do input
 
  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };
 
  // Função para lidar com a tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite uma nova tarefa"
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={addTask} style={{ padding: '10px 20px', marginLeft: '10px',
      backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px'

    }}>
        Adicionar
      </button>
      <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoList;
 