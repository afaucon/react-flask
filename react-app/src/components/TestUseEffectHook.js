// J'ai suivi ce tutorial:
// https://fr.reactjs.org/docs/hooks-effect.html

import React, { useState, useEffect } from 'react';

function TestUseEffectHook() {
  const [count, setCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <h1>TestUseEffectHook</h1>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default TestUseEffectHook;