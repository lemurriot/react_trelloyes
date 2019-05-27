import React from 'react';
import List from './components/List';


function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="app-list">
        <List />
      </div>
    </main>
  );
}

export default App;
