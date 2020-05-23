import React from 'react';
import Router from './Router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

function App() {
  library.add(fab);
  
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
