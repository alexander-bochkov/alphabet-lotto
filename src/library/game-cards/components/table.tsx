import React from 'react';
import {Row} from './row';
import {composeClassName} from '../../../utils';

export const Table = ({table}: {table: Array<any>}) => (
    <table className={composeClassName('game-cards__table')}>
        <tbody>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {table.map((row, index) => <Row row={row} key={index} />)}
        </tbody>
    </table>
);
