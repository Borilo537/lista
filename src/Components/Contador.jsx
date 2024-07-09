import React, { useState } from 'react';
 
function Contador() {
    // Estados para armazenar a contagem de cliques de cada botão
    const [count1, setCount1] = useState(0);

 
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador de Cliques</h1>
 
            {/* Primeiro contador e botão */}
            <p>Botão 1: Você clicou {count1} vezes.</p>
            <button onClick={() => setCount1(count1 + 1)} style={{ padding: '10px 20px', fontSize: '16px',
        backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px' }}>
                Clique aqui (Botão 1)
            </button>
        </div>
    );
}
 
export default Contador;