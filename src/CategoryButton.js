import React from 'react';

export default function CategoryButton(props) {
    const {category, updateCategory} = props
    return (
        <button key={category} onClick={() => updateCategory(category)}>{category}</button>
    )    
}