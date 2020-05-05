import React, {ReactNode} from 'react';
import {composeClassName} from '../../utils';
import './cards-layout.scss';

export const CardsLayout = ({
    displayPreviousLettersCard,
    displayTranscriptionCard,
    previousLettersCard,
    randomLetterCard,
    transcriptionCard
}: {
    displayPreviousLettersCard: boolean,
    displayTranscriptionCard: boolean,
    previousLettersCard: ReactNode,
    randomLetterCard: ReactNode,
    transcriptionCard: ReactNode
}) => (
    <div className={composeClassName('cards-layout')}>
        <div className={composeClassName('cards-layout__random-letter-card')}>
            {randomLetterCard}
        </div>
        {displayTranscriptionCard && (
            <div className={composeClassName('cards-layout__transcription-card')}>
                {transcriptionCard}
            </div>
        )}
        {displayPreviousLettersCard && (
            <div className={composeClassName('cards-layout__previous-letters-card')}>
                {previousLettersCard}
            </div>
        )}
    </div>
);
