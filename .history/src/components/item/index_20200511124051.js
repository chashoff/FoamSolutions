import React from 'react';
import './index.css'

const Item = (props) => (
    <div style={styles.container}>
        <img src={props.icon} alt=""/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
)
export default Item;

const styles = {
    container: {
        backgroundColor: 'lightslategrey'
    }
}