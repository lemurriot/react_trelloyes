import React from 'react';
import List from './components/List';


class App extends React.Component {
  render(){
    const mapListsToStore = this.props.store.lists.map(list => <List key={list.id} header={list.header} cardContent={list.cardIds.map(id => this.props.store.allCards[id])}/>);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="app-list">
          {mapListsToStore}
        </div>
      </main>
    );
  }
}

export default App;
