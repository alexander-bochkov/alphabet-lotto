import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './components/card';
import './game-cards.scss';

export const GameCards = ({cards}: {cards: Array<any>}) => (
    ReactDOM.createPortal((
        // eslint-disable-next-line react/no-array-index-key
        cards ? cards.map((card, index) => <Card card={card} key={index} />) : null
    ), document.getElementById('print'))
);
