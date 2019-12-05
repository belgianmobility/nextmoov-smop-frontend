// @flow
import React from 'react';
import Sidebar from './containers/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar
        onResultClick={(e) => console.log(e)}
      />
    </div>
  );
}

export default App;
