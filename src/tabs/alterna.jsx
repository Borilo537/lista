import React, { useState } from 'react';
 
function Alterna() {
  // Estado para armazenar o texto atual
  const [text, setText] = useState('Texto Inicial');
 
  // Função para alternar o texto
  const toggleText = () => {
    // Alterna entre os dois textos
    setText(prevText => (prevText === 'Texto Inicial' ? 'Texto Alternativo' : 'Texto Inicial'));
  };
 
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Exibe o texto atual */}
      <p>{text}</p>
      {/* Botão que chama a função de alternar texto ao ser clicado */}
      <button onClick={toggleText} style={{padding: '10px',backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px'}}>
        Alternar Texto
      </button>
    </div>
  );
}
 
export default Alterna;
 