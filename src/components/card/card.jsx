import React from 'react';
import './card.css';


export const Card = (props) => (
    <div className='card-container'>
        <h3>{props.monster.name}</h3>
    </div>
)

