import React, { useState } from 'react';
 
function DarkMode() {

    const [mode, setMode] = useState('light');

    function bla() {
        console.log('wqgq');
    }
    
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>

          <button onClick={setMode()} style={{padding: '10px',backgroundColor: 'black', border: 'none', color: 'white', borderRadius: '10px'}}>
                Mudar modo
          </button>
        </div>
      );

}

export default DarkMode;