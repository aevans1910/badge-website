import React from 'react';

export default function Badge(props) {
    const {name, description, category} = props.badge
      return (
        <div className="Badge">
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
        </div>
      );
    }

