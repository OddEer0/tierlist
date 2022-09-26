import React from 'react';
import TierList from './components/TierList';
import './styles/App.css';

function App(props) {
  return (
    <div className="App container">
      <TierList boards={props.data}/>
    </div>
  );
}

export default App;
