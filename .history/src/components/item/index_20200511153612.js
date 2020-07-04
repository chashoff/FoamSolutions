import React from 'react';
import './index.css'

const Item = (props) => (
    <div className="item-container-inner">
        <img src={props.icon} alt=""/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
)
export default Item;