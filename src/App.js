import React, { Component } from 'react';
import './App.css';
import BucketList from './components/BucketList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Backblaze</h1>
        <BucketList />
      </div>
    );
  }
}

export default App;
