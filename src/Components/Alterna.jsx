import React, { useState } from 'react';
 
function Alterna() {
  // Estado para armazenar o texto atual
  const [text, setText] = useState('Texto Inicial');
 
  // Função para alternar o texto
  const toggleText = () => {
    // Alterna entre os dois textos
    setText(prevText => (prevText === 'Texto Inicial' ? 'Texto Alternativo' : 'Texto Inicial'));
  };
 
}
 
export default Alterna;
 