import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store';


class App extends React.Component {
  state = {
    lists: STORE.lists.slice(),
    allCards: STORE.allCards
  }

  
  // omitCard = (obj, keyToOmit) => {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }
  handleDeleteCard = cardId => {
    const stateCopy = this.state.lists.slice(0)
    console.log(stateCopy)
    const updatedList = stateCopy.forEach(list => {
      // list.cardIds = list.cardIds.filter(id => id !== cardId)

      // WHY IS THIS MUTATING MY STATE??? FYI - Adding 'boom' to the string is just a test to demonstrate that my state is being mutated as a weird side effect. I thought .slice() is not supposed to mutate the original but make a copy?
      list.cardIds+= 'boom'
    })
    // console.log(updatedList)
    // this.setState({
    //   lists: updatedList
    // })

    // const newCardSet = this.omitCard(this.state.allCards, cardId)
    // console.log(newCardSet);
    // this.setState({
    //   allCards: newCardSet
    // })
  }
  render(){
    const mapListsToStore = this.state.lists.map(list => <List key={list.id} header={list.header} onDeleteCard={ this.handleDeleteCard} cardContent={list.cardIds.map(id => this.state.allCards[id])}/>);
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {mapListsToStore}
        </div>
      </main>
    );
  }
}

export default App;
