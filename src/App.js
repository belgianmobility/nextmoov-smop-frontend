// @flow
import React from 'react';
import TextInput from './components/TextInput';

function App() {
  return (
    <div className="App">
      <TextInput
        onChange={(e) => console.log(e.target.value)}
        id="from"
        labelContent="from"
        value="yolo"
      />
    </div>
  );
}

export default App;
