import React from 'react';
import './Badge.css'

export default function Badge(props) {
    const {name, description, category, image} = props.badge
      return (
        <div className="Badge">
          <div className="Image">
            <img src={`${process.env.PUBLIC_URL}${image}`} width="200" height="200" />
          </div>
          <div className="Text">
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
          </div>
        </div>
      );
    }

