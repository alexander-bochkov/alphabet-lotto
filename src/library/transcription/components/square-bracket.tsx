import React from 'react';
import {composeClassName} from '../../../utils';

export const SquareBracket = ({
    left,
    right
}: {
    left?: boolean,
    right?: boolean
}) => (
    <div className={composeClassName('transcription__square-bracket', {
        'transcription__square-bracket--left': left,
        'transcription__square-bracket--right': right
    })}
    >
        {left && '['}
        {right && ']'}
    </div>
);

SquareBracket.defaultProps = {
    left: false,
    right: false
};
