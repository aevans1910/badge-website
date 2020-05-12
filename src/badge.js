import React from 'react';
import {connect} from 'react-redux';
import {toggle_badge} from "./actions"
import './Badge.css'

function Badge(props) {
    const {name, description, category, image, id} = props.badge
    const {toggle_badge, badges} = props
      return (
        <div className="Badge">
          <div className="Image">
            <img src={`${process.env.PUBLIC_URL}${image}`} width="200" height="200" />
          </div>
          <div className="Text">
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
            <div className="toggleButton">
              Received badge 
              <input type="checkbox" className="checkButtons" onClick={() => 
                {toggle_badge(id) }} value={!!badges[id]} />
            </div>
          </div>
        </div>
      );
    }

function mapStateToProps(state) {
  return {
    badges: state.badges
  }
}

function mapDispatchToProps() {
  return {
    toggle_badge
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Badge) 

