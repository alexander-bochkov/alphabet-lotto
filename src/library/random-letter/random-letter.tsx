import React from 'react';
import {composeClassName} from '../../utils';
import './random-letter.scss';

export const RandomLetter = ({
    character,
    type
}: {
    character: string,
    type: string
}) => (
    <div className={composeClassName(`random-letter random-letter--${type}`)}>
        {character}
    </div>
);
