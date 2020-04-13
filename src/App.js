import React, {useState} from 'react';
import './App.css';
import data, {categoriesUnique, categoriesWithCounts, categoriesWithCountsArray} from './badge-data';
import Badge from './Badge'
import PageHeader from './PageHeader'
import CategoryButton from './CategoryButton'

function App() {
const [selectedCategory, setSelectedCategory] = useState("")
  return (
    <div className="App">
      <PageHeader />
      <div className="container">
        <div className="text">
          <p>BADGE TYPES</p>
        </div>
        {categoriesUnique.map(category => <CategoryButton category={category} 
          updateCategory={setSelectedCategory} />)}
      </div>
      <div className="container">
        {data.filter(badge => badge.category === selectedCategory).map(badge => <Badge badge={badge}/>)}
      </div>
    </div>
  );
}

export default App;
