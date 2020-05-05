import React from 'react';
import {composeClassName} from '../../../utils';

export const Cell = ({cell}: {cell: string}) => (
    <td className={composeClassName('game-cards__cell')}>
        {cell}
    </td>
);
