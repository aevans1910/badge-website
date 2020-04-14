import React from 'react';

export default function Badge(props) {
    const {name, description, category, image} = props.badge
      return (
        <div className="Badge">
            <img src={`${process.env.PUBLIC_URL}${image}`} width="200" height="200" />
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
        </div>
      );
    }

