import React from 'react';
import {Card, Transcription} from '../../library';
import {Letter} from '../../data';

const CARD_TITLE = 'Transcription';

type TranscriptionCardProps = {
    currentLetter: Letter
};

export const TranscriptionCard = ({currentLetter}: TranscriptionCardProps) => {
    const currentLetterTranscription = currentLetter ? currentLetter.transcription : null;
    const currentLetterType = currentLetter ? currentLetter.type : null;

    return (
        <Card
            content={(
                <Transcription
                    transcription={currentLetterTranscription}
                    type={currentLetterType}
                />
            )}
            title={CARD_TITLE}
            type={Card.TYPE.RECT}
        />
    );
};
