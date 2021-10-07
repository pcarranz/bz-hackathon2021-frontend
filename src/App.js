import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Backblaze Products</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
