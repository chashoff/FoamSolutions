import React from 'react';
import './index.css'

const Item = (props) => (
    <div className="item-container-inner">
        <img className="" src={props.icon} alt=""/>
        <h3>{props.title}</h3>
        <p className="item-desc-seperator"></p>
        <p>{props.description}</p>
    </div>
)
export default Item;