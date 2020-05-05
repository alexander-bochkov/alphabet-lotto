import React from 'react';
import {composeClassName} from '../../../utils';

type PreviousLetterProps = {
    character: string,
    type: string
};

export const PreviousLetter = ({
    character,
    type
}: PreviousLetterProps) => (
    <div className={composeClassName(`previous-letters__previou-letter previous-letters__previou-letter--${type}`)}>
        {character}
    </div>
);
