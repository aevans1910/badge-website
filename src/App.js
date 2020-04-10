import React from 'react';
import logo from './logo.svg';
import './App.css';
import data, {categoriesUnique, categoriesWithCounts, categoriesWithCountsArray} from './badge-data';
import Badge from './badge'

function App() {
console.log(categoriesWithCountsArray)
  return (
    <div className="App">
      <div className="container">
        {categoriesUnique.map(category => <button key={category}>{category}</button>)}
      </div>
      <div className="container">
        {data.map(badge => <Badge badge={badge}/>)}
      </div>
    </div>
  );
}

export default App;
