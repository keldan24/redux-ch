import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
      <Popup />
    </div>
  );
}

export default App;
