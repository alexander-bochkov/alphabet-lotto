import React from 'react';
import {SquareBracket} from './components/square-bracket';
import {composeClassName} from '../../utils';
import './transcription.scss';

export const Transcription = ({
    transcription,
    type
}: {
    transcription: string,
    type: string
}) => (
    <div className={composeClassName(`transcription transcription--${type}`)}>
        <SquareBracket left />
        {transcription}
        <SquareBracket right />
    </div>
);
