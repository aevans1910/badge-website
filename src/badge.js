import React from 'react';

export default function Badge(props) {
    const {name, description, category} = props.badge
      return (
        <div className="Badge">
            <h1>{name}</h1>
            <h5>{category}</h5>
            <p>{description}</p>
        </div>
      );
    }

