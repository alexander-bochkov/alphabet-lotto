import React from 'react';
import {Cell} from './cell';
import {composeClassName} from '../../../utils';

export const Row = ({row}: {row: Array<string>}) => (
    <tr
        className={composeClassName('game-cards__row')}
    >
        {/* eslint-disable-next-line react/no-array-index-key */}
        {row.map((cell, index) => <Cell cell={cell} key={index} />)}
    </tr>
);
