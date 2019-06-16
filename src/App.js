import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store';

// why are these functions outside of the class? helper functions? also, why is one defined as an es6 arrow and the other a standard?

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}  

function omitCard(obj, keyToOmit){
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {
  state = {
    store: STORE
  }
  
  handleDeleteCard = cardId => {
    const { lists, allCards } = this.state.store;
      
    const newLists = lists.map(list => ({
      //returns an object, the spread operator sets up all the key/value pairs, the cardIds are filtered to disinclude the selected cardId... question: wouldn't the spread operator include the cardIds? does calling that key out by name pull it out of the spread?
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omitCard(allCards, cardId);

    this.setState({
      store: {
        lists:  newLists,
        allCards: newCards
      }
    })
  };

  handleAddRandomCard = listId => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId){
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          //what's up with the brackets?
          [newCard.id]: newCard
        }
      }
    })
  }

  render(){
    const mapListsToStore = this.state.store.lists.map(list => 
      <List 
        key={list.id} 
        id={list.id}
        header={list.header} 
        onDeleteCard={this.handleDeleteCard} 
        onAddRandomCard={this.handleAddRandomCard} 
        cardContent={list.cardIds.map(id => this.state.store.allCards[id])}
      />
    );
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
