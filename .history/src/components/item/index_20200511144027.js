import React from 'react';
import './index.css'

const Item = (props) => (
    <div style={styles.container}>
        <img src={props.icon} alt=""/>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
)
export default Item;

const styles = {
    container: {
        backgroundColor: 'lightslategrey'
    }
}