import React, {useState} from 'react';
import data, {categoriesUnique} from './badge-data';
import Badge from './Badge'
import CategoryButton from './CategoryButton'
import './PageContent.css'

categoriesUnique.push("All")
export default function PageContent() {
    const [selectedCategory, setSelectedCategory] = useState("All")
      return (
        <div className="PageContent">
          <div className="badgeTypes">
            <div className="text">
              <p>BADGE TYPES</p>
            </div>
            {categoriesUnique.map(category => <CategoryButton category={category} 
              updateCategory={setSelectedCategory} />)}
          </div>
          <div className="container">
            {data.filter(badge => badge.category === selectedCategory || selectedCategory === "All").map(badge => <Badge badge={badge}/>)}
          </div>
        </div>
      );
    }