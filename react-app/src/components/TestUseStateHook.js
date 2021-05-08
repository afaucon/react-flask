import React, { useState } from 'react';

function TestUseStateHook() {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>TestUseStateHook</h1>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default TestUseStateHook;